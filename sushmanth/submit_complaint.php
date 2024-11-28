<?php
include 'db_connection.php';

// Collect form data
$name = $_POST['name'];
$age = $_POST['age'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$location = $_POST['location'];
$category = $_POST['category'];
$description = $_POST['description'];

// Insert complaint into the database
$sql = "INSERT INTO complaints (name, age, email, phone, location, category, description, solution, status) 
        VALUES ('$name', '$age', '$email', '$phone', '$location', '$category', '$description', '', 'pending')";

if ($conn->query($sql) === TRUE) {
    echo "Complaint submitted successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
