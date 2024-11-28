// Admin Credentials
const adminCredentials = {
    email: "admin@example.com",
    password: "admin123"
};

// Function to display the correct page
function showPage(pageId) {
    document.getElementById('register-page').classList.add('hidden');
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('admin-page').classList.add('hidden');
    document.getElementById(pageId).classList.remove('hidden');
}

// Function to handle user login
function userLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Example user login validation (you can replace with actual user credentials check)
    if (email !== adminCredentials.email) {
        showPage('home-page'); // Redirect to user home page
    } else {
        alert("Use the Admin Login button for admin access.");
    }
}

// Function to handle admin login
function adminLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === adminCredentials.email && password === adminCredentials.password) {
        showPage('admin-page'); // Redirect to admin page
        renderComplaints(); // Fetch complaints when admin is logged in
    } else {
        alert("Invalid admin credentials");
    }
}

// Sample data for complaints
const complaints = [
    { id: 1, name: "John Doe", title: "Noise complaint", status: "progress", description: "Loud noise from the neighbor's party." },
    { id: 2, name: "Jane Smith", title: "Maintenance issue", status: "resolved", description: "Leaky faucet in the kitchen." }
];

// Function to render complaints on admin page
function renderComplaints() {
    const complaintsList = document.getElementById('complaints-list');
    complaintsList.innerHTML = ''; // Clear existing complaints

    complaints.forEach(complaint => {
        const complaintDiv = document.createElement('div');
        complaintDiv.classList.add('complaint');
        complaintDiv.innerHTML = `
            <div class="title">${complaint.title}</div>
            <div class="status ${complaint.status}">${complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}</div>
            <div class="description">${complaint.description}</div>
            <div class="name">Submitted by: ${complaint.name}</div>
        `;
        complaintsList.appendChild(complaintDiv);
    });
}

// Function to submit a new complaint
function submitComplaint() {
    const formData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dob").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value
    };

    // Adding new complaint to the array
    const newComplaint = {
        id: complaints.length + 1,
        ...formData,
        status: "progress"
    };

    complaints.push(newComplaint); // Add the new complaint to the complaints array

    alert("Complaint successfully submitted!");
    document.getElementById("complaint-form").reset(); // Reset the form
}

// Sample event listener for form submission (assuming you have a complaint form with id 'complaint-form')
document.getElementById("complaint-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    submitComplaint();
});

// Event listener for viewing complaints
document.getElementById("view-complaints-btn").addEventListener("click", function() {
    showPage('admin-page'); // Redirects to the admin page
    renderComplaints(); // Render complaints once redirected
});
