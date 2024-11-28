// Admin Credentials
const adminCredentials = {
    email: "admin@example.com",
    password: "admin123"
};

// Sample data for complaints (in a real app, this could be fetched from a server)
const complaints = [
    { id: 1, title: "Complaint 1", status: "progress", solution: "" },
    { id: 2, title: "Complaint 2", status: "pending", solution: "" },
    { id: 3, title: "Complaint 3", status: "completed", solution: "Resolved with a solution." },
    { id: 4, title: "Complaint 4", status: "progress", solution: "" },
    { id: 5, title: "Complaint 5", status: "pending", solution: "" }
];

// Function to display the correct page
function showPage(pageId) {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('admin-page').classList.add('hidden');
    document.getElementById(pageId).classList.remove('hidden');
}

// Function to handle admin login
function adminLogin(event) {
    event.preventDefault();  // Prevent the form from submitting

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === adminCredentials.email && password === adminCredentials.password) {
        showPage('admin-page');  // Show admin page
        renderComplaints();  // Render complaints after login
    } else {
        document.getElementById('login-error').innerText = "Invalid credentials. Please try again.";
    }
}

// Function to render complaints
function renderComplaints() {
    const complaintsList = document.getElementById('complaints-list');
    complaintsList.innerHTML = '';  // Clear existing complaints

    complaints.forEach(complaint => {
        const complaintDiv = document.createElement('div');
        complaintDiv.classList.add('complaint');
        
        complaintDiv.innerHTML = `
            <div><strong>${complaint.title}</strong></div>
            <div class="status ${complaint.status}">Status: ${complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}</div>
            <div class="solution-box">
                <textarea id="solution-${complaint.id}" placeholder="Enter solution for this complaint...">${complaint.solution}</textarea>
                <button onclick="submitSolution(${complaint.id})">Submit Solution</button>
            </div>
            <div class="status select-status">
                <select id="status-${complaint.id}" onchange="updateStatus(${complaint.id})">
                    <option value="pending" ${complaint.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="progress" ${complaint.status === 'progress' ? 'selected' : ''}>In Progress</option>
                    <option value="completed" ${complaint.status === 'completed' ? 'selected' : ''}>Completed</option>
                </select>
            </div>
        `;
        
        complaintsList.appendChild(complaintDiv);
    });
}

// Function to submit a solution for a complaint
function submitSolution(complaintId) {
    const solution = document.getElementById(`solution-${complaintId}`).value;
    const complaint = complaints.find(c => c.id === complaintId);
    complaint.solution = solution;  // Update the solution for the complaint
    alert("Solution submitted successfully.");
}

// Function to update the status of a complaint
function updateStatus(complaintId) {
    const newStatus = document.getElementById(`status-${complaintId}`).value;
    const complaint = complaints.find(c => c.id === complaintId);
    complaint.status = newStatus;  // Update the status of the complaint
    renderComplaints();  // Re-render complaints to reflect changes
}

// Initially, show the login page
showPage('login-page');
