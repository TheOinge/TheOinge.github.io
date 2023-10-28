<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="lamp.css">
    <title>Add and Display Data</title>
</head>
<body>
    <?php
        $firstname = isset($_GET['first']) ? $_GET['first'] : "";
        $lastname = isset($_GET['last']) ? $_GET['last'] : "";
    ?>
    <h1>Adding <?php echo $firstname . " " . $lastname; ?></h1>
    <?php
        $servername = "localhost";
        $username = "user58";
        $password = "58qktp";
        $dbname = "db58";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Check if the URL query parameters for first and last names are set (for adding records)
        if (isset($_GET['first']) && isset($_GET['last'])) {
            $firstname = $_GET['first'];
            $lastname = $_GET['last'];

            $sql = "INSERT INTO randomuser (first, last) VALUES ('$firstname', '$lastname')";
            if ($conn->query($sql) === TRUE) {
                echo "<p>New record created successfully</p>";
            } else {
                echo "<p>Error: " . $sql . "<br>" . $conn->error . "</p>";
            }
        }

        // Display the table data
        $sql = "SELECT first, last FROM randomuser";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "<table border='1'>";
            echo "<tr><th>First Name</th><th>Last Name</th></tr>";

            while ($row = $result->fetch_assoc()) {
                echo "<tr><td>" . $row["first"] . "</td><td>" . $row["last"] . "</td></tr>";
            }

            echo "</table>";
        } else {
            echo "<p>No records found</p>";
        }

        $conn->close();
    ?>
</body>
</html>
