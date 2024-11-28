function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('div');
    pages.forEach(page => page.classList.add('hidden'));
    
    // Show the requested page
    document.getElementById(pageId).classList.remove('hidden');
}

function submitComplaint(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    
    const complaintData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        category: document.getElementById('category').value,
        description: document.getElementById('description').value,
        status: "Pending"  // Default status
    };

    // Get complaints from localStorage, or create a new array if none exist
    let complaints = JSON.parse(localStorage.getItem('complaints')) || [];

    // Push the new complaint data into the array
    complaints.push(complaintData);

    // Save the updated complaints array back to localStorage
    localStorage.setItem('complaints', JSON.stringify(complaints));

    // Optionally, show a success message or redirect
    alert("Complaint Submitted Successfully!");

    // Clear form fields
    document.getElementById('complaint-form').reset();
}

function goBackToHome() {
    showPage('home-page');
}

// Load complaints on view-complaints.html
function loadComplaints() {
    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    const complaintsList = document.getElementById('complaints-list');
    
    complaintsList.innerHTML = ""; // Clear the list before displaying new complaints
    
    complaints.forEach((complaint, index) => {
        const complaintElement = document.createElement('div');
        complaintElement.classList.add('complaint');
        complaintElement.innerHTML = `
            <h3>${complaint.name} - ${complaint.category}</h3>
            <p><strong>Status:</strong> ${complaint.status}</p>
            <p><strong>Description:</strong> ${complaint.description}</p>
            <button onclick="updateStatus(${index})">Update Status</button>
        `;
        complaintsList.appendChild(complaintElement);
    });
}

// Update the complaint status (Pending -> Processing -> Completed)
function updateStatus(index) {
    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    let status = complaints[index].status;

    // Cycle through the statuses
    if (status === "Pending") {
        complaints[index].status = "Processing";
    } else if (status === "Processing") {
        complaints[index].status = "Completed";
    } else {
        complaints[index].status = "Pending";
    }

    // Save updated complaints back to localStorage
    localStorage.setItem('complaints', JSON.stringify(complaints));

    // Reload complaints list to reflect updated status
    loadComplaints();
}

// Automatically load complaints when the page is opened
if (document.getElementById('complaints-list')) {
    loadComplaints();
}
