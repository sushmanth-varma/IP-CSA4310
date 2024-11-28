<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Account Management</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      width: 300px;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }

    a {
      color: #4CAF50;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Registration Form -->
    <div id="register-form">
      <h2>Register</h2>
      <form id="register">
        <input type="text" id="reg-username" placeholder="Username" required><br>
        <input type="email" id="reg-email" placeholder="Email" required><br>
        <input type="password" id="reg-password" placeholder="Password" required><br>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="#" onclick="toggleForm('login')">Login</a></p>
    </div>

    <!-- Login Form -->
    <div id="login-form" style="display: none;">
      <h2>Login</h2>
      <form id="login">
        <input type="text" id="login-username" placeholder="Username" required><br>
        <input type="password" id="login-password" placeholder="Password" required><br>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#" onclick="toggleForm('register')">Register</a></p>
    </div>

    <!-- Account Details (Only visible after login) -->
    <div id="account-details" style="display: none;">
      <h2>Account Details</h2>
      <p><strong>Username:</strong> <span id="account-username"></span></p>
      <p><strong>Email:</strong> <span id="account-email"></span></p>
      <button onclick="logout()">Logout</button>
    </div>
  </div>

  <script>
    // To handle form switching
    function toggleForm(form) {
      if (form === 'register') {
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
      } else {
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
      }
    }

    // Handle registration
    document.getElementById('register').addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('reg-username').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;

      if (username && email && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Registration successful!');
        toggleForm('login');
      } else {
        alert('All fields are required!');
      }
    });

    // Handle login
    document.getElementById('login').addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('account-details').style.display = 'block';
        document.getElementById('account-username').textContent = storedUsername;
        document.getElementById('account-email').textContent = localStorage.getItem('email');
      } else {
        alert('Invalid credentials!');
      }
    });

    // Logout function
    function logout() {
      document.getElementById('account-details').style.display = 'none';
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('login-username').value = '';
      document.getElementById('login-password').value = '';
    }
  </script>

</body>
</html>
