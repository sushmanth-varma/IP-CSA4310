<?php
include 'db_connection.php';

$sql = "SELECT id, name, age, email, phone, location, category, description FROM complaints";
$result = $conn->query($sql);

$complaints = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $complaints[] = $row;
    }
}

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($complaints);

$conn->close();
?>
