<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "complaints_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data and validate
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $age = isset($_POST['age']) ? (int)$_POST['age'] : 0;
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $location = isset($_POST['location']) ? $_POST['location'] : '';
    $category = isset($_POST['category']) ? $_POST['category'] : '';
    $description = isset($_POST['description']) ? $_POST['description'] : '';

    // Display received data for debugging
    echo "<pre>";
    echo "Received Data:\n";
    echo "Name: $name\n";
    echo "Age: $age\n";
    echo "Email: $email\n";
    echo "Phone: $phone\n";
    echo "Location: $location\n";
    echo "Category: $category\n";
    echo "Description: $description\n";
    echo "</pre>";

    // Prepare SQL query using prepared statement
    $sql = "INSERT INTO complaints (name, age, email, phone, location, category, description) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        die("SQL prepare failed: " . $conn->error);
    }

    // Bind parameters to the prepared statement
    $stmt->bind_param("sisssss", $name, $age, $email, $phone, $location, $category, $description);

    // Execute the query
    if ($stmt->execute()) {
        echo "Complaint submitted successfully.";
        // Uncomment the following line to redirect after testing
        // header("Location: success.html");
        exit();
    } else {
        echo "Execution failed: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "Invalid request method. Please submit the form correctly.";
}

$conn->close();
?>
