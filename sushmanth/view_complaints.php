<?php
// Include database connection
include 'db_connection.php';

// Query to fetch all complaints
$sql = "SELECT id, name, age, email, phone, location, category, description FROM complaints";
$result = $conn->query($sql);

// Display complaints in a table
echo "<h2>View Complaints</h2>";
echo "<table border='1'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Category</th>
            <th>Description</th>
            <th>Solution</th>
            <th>Action</th>
        </tr>";

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . htmlspecialchars($row['id']) . "</td>
                <td>" . htmlspecialchars($row['name']) . "</td>
                <td>" . htmlspecialchars($row['age']) . "</td>
                <td>" . htmlspecialchars($row['email']) . "</td>
                <td>" . htmlspecialchars($row['phone']) . "</td>
                <td>" . htmlspecialchars($row['location']) . "</td>
                <td>" . htmlspecialchars($row['category']) . "</td>
                <td>" . htmlspecialchars($row['description']) . "</td>
                <td><input type='text' placeholder='Enter solution'></td>
                <td><button>Submit Solution</button> <button>Reject</button></td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No complaints found.";
}

// Close the connection
$conn->close();
?>
