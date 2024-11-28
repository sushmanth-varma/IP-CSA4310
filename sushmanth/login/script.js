// Function to navigate to Post Complaint Page
function goToPostComplaintPage() {
    // Hide all other pages and show the Post Complaint page
    showPage('post-complaint-page');
}

// Function to handle the complaint submission
function submitComplaint() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    // Validate the form fields
    if (!name || !age || !dob || !email || !phone || !location || !category || !description) {
        alert("Please fill in all fields.");
        return;
    }

    // Handle form submission (in real applications, this data will be sent to a server)
    alert("Complaint submitted successfully!");

    // Reset form after submission
    document.getElementById('complaint-form').reset();

    // Optionally, redirect to home page after successful submission
    goBackToHome();
}

// Function to go back to home page (simulating a page switch)
function goBackToHome() {
    // Here you can navigate back to the Home Page
    showPage('home-page');
}

// Function to show different pages (Registration, Login, Home, etc.)
function showPage(pageId) {
    document.getElementById('register-page').classList.add('hidden');
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('post-complaint-page').classList.add('hidden');

    document.getElementById(pageId).classList.remove('hidden');
}

// Function to simulate viewing Complaint Status (this can be linked to actual data)
function viewComplaintStatus() {
    alert("This feature is coming soon!");
}

// Function to simulate viewing Admin Contact Details (can be linked to actual admin contact info)
function viewAdminContactDetails() {
    alert("Admin Contact Details will be shown here.");
}
// Example JavaScript to handle form submission
function submitComplaint() {
    // Logic for submitting the complaint
    alert("Complaint Submitted!");
}

function goBackToHome() {
    window.location.href = 'index.html';  // Redirects to the Home Page
}
