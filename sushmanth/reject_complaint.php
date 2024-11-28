<?php
include 'db_connection.php';

$id = $_POST['id'];

// Update the complaint status to Rejected
$sql = "UPDATE complaints SET status = 'Rejected' WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $id);

if ($stmt->execute()) {
    echo "Complaint rejected successfully.";
} else {
    echo "Error rejecting complaint: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
