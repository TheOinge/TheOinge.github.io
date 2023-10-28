<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add</title>
</head>
<body>
    <?php
        $servername = "localhost";
        $username = "user58";
        $password = "58qktp";
        $dbname = "db58";
        
        $conn = new mysqli($servername, $username, $password, $dbname);
        
        $firstname = $_GET['first'];
        $lastname = $_GET['last'];
        $country = $_GET['country'];
        $age = $_GET['age'];
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        } else {
            echo "Connected successfully";
        }
        
        $sql = "INSERT INTO randuser (first, last, country, age) VALUES ('$firstname', '$lastname', '$country', $age)";
        
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        
        $sql = "SELECT * FROM randuser";
        $result = $conn->query($sql);
        
        echo "Added: $firstname $lastname";
        
        if ($result->num_rows > 0) {
            echo "<table class='table table-hover'>";
            echo "<thead>";
            echo "<tr>";
            echo "<th>First Name</th>";
            echo "<th>Last Name</th>";
            echo "</tr>";
            echo "</thead>";
            echo "<tbody>";
        
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row['first'] . "</td>";
                echo "<td>" . $row['last'] . "</td>";
                echo "<td>" . $row['country'] . "</td>";
                echo "<td>" . $row['age'] . "</td>";
                echo "</tr>";
            }
        
            echo "</tbody>";
            echo "</table>";
        } else {
            echo "0 results";
        }
        
        $conn->close();
    ?>
</body>
</html>