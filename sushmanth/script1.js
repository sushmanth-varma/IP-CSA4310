<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complain Ease</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Complain Ease</h1>

        <!-- Registration Page -->
        <div id="register-page">
            <h2 style="color:#68c3c0;">Create an Account</h2>
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter a password" required>
                </div>
                <div class="form-group">
                    <button type="button" onclick="showPage('login-page')">Register</button>
                </div>
                <div class="nav-link">
                    <a onclick="showPage('login-page')">Already have an account? Login</a>
                </div>
            </form>
        </div>

        <!-- Login Page -->
        <div id="login-page" class="hidden">
            <h2 style="color:#f06b6b;">Welcome Back!</h2>
            <form>
                <div class="form-group">
                    <label for="login-email">Email</label>
                    <input type="email" id="login-email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" placeholder="Enter your password" required>
                </div>
                <div class="form-group">
                    <button type="button" onclick="userLogin()">User Login</button>
                </div>
                <div class="form-group">
                    <button type="button" onclick="adminLogin()" style="background-color: #f06b6b;">Admin Login</button>
                </div>
                <div class="nav-link">
                    <a onclick="showPage('register-page')">Don't have an account? Register</a>
                </div>
            </form>
        </div>

        <!-- Home Page -->
        <div id="home-page" class="hidden">
            <h2 style="color:#ff914d;">Welcome to Complain Ease</h2>
            <p>"Complain Ease" is your one-stop platform to report issues and track their resolution. We streamline the complaint process, ensuring that your concerns reach the right people efficiently. Whether it's filing a new complaint, checking its status, or reaching out to administrators, Complain Ease simplifies everything for you.</p>
            <p>Choose an option to proceed:</p>
            <div class="form-group">
                <button type="button">Post Complaint</button>
            </div>
            <div class="form-group">
                <button type="button">View Complaint Status</button>
            </div>
            <div class="form-group">
                <button type="button">Admin Contact Details</button>
            </div>
            <div class="nav-link">
                <a onclick="showPage('login-page')">Logout</a>
            </div>
        </div>

        <!-- Admin Page -->
        <div id="admin-page" class="hidden">
            <h2 style="color:#f06b6b;">Admin Dashboard</h2>
            <p>Manage complaints and user accounts.</p>
            <div class="form-group">
                <button type="button">View All Complaints</button>
            </div>
            <div class="form-group">
                <button type="button">Resolve Complaints</button>
            </div>
            <div class="form-group">
                <button type="button">Manage User Accounts</button>
            </div>
            <div class="nav-link">
                <a onclick="showPage('login-page')">Logout</a>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
