<?php
// Include database connection file
include 'db_connection.php';

// Check if the form is submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if 'id' and 'solution' are provided
    if (isset($_POST['id']) && isset($_POST['solution'])) {
        $id = $_POST['id'];
        $solution = $_POST['solution'];

        // Validate input (Optional: You can add more validation here)
        if (!empty($id) && !empty($solution)) {
            // Update the complaint solution in the database
            $sql = "UPDATE complaints SET solution = ?, status = 'Resolved' WHERE id = ?";
            $stmt = $conn->prepare($sql);

            // Bind parameters ('si' means string and integer)
            $stmt->bind_param('si', $solution, $id);

            // Execute the statement
            if ($stmt->execute()) {
                echo "Solution submitted successfully.";
            } else {
                echo "Error submitting solution: " . $stmt->error;
            }

            // Close the statement and connection
            $stmt->close();
        } else {
            echo "Error: Please provide both solution and complaint ID.";
        }
    } else {
        echo "Error: Missing complaint ID or solution.";
    }
} else {
    echo "Invalid request.";
}

// Close the database connection
$conn->close();
?>
