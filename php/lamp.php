<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add</title>
    <link rel="stylesheet" href="../css/lamp.css">
</head>
<body>
    <h1>Added</h1>
    <?php
           
            $servername = "localhost";
            $username = "user58";
            $password = "58qktp";
            $dbname = "db58";

            // $servername = "localhost";
            // $username = "root";
            // $password = "mysql";
            // $dbname = "db58";

                // $conn = mysqli_connect($servername, $username, $password, $dbname);

                // if (!$conn) {
                //     die("Connection failed: " . mysqli_connect_error());
                // }

                // $conn = new mysqli($servername, $username, $password, $dbname);

                // $firstname = $_GET['first'];
                // $lastname = $_GET['last'];
                // $country = $_GET['country'];
                // $age = $_GET['age'];

                // $sql = "INSERT INTO randuser (first, last, country, age) VALUES ('$firstname', '$lastname', '$country', '$age')";

                // if (mysqli_query($conn, $sql)) {
                //     echo "New record created successfully";
                //     echo "<h2>Added: $firstname $lastname</h2>";
                // } else {
                //     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                // }
                // mysqli_close($conn);
                // $conn = mysqli_connect($servername, $username, $password, $dbname);

                // if (!$conn) {
                //     die("Connection failed: " . mysqli_connect_error());
                // }

                // $sql = "SELECT first, last, country, age FROM randuser";
                // $result = mysqli_query($conn, $sql);

                // if (mysqli_num_rows($result) > 0) {
                //     echo '<table>';
                //     echo '<thead>';
                //     echo '<tr>';
                //     echo '<th>First Name</th>';
                //     echo '<th>Last Name</th>';
                //     echo '<th>Country</th>';
                //     echo '<th>Age</th>';
                //     echo '</tr>';
                //     echo '</thead>';
                //     echo '<tbody>';

                //     while ($row = mysqli_fetch_assoc($result)) {
                //         echo '<tr>';
                //         echo '<td>' . $row['first'] . '</td>';
                //         echo '<td>' . $row['last'] . '</td>';
                //         echo '<td>' . $row['country'] . '</td>';
                //         echo '<td>' . $row['age'] . '</td>';
                //         echo '</tr>';
                //     }

                //     echo '</tbody>';
                //     echo '</table>';
                // } else {
                //     echo "No past submissions yet.";
                // }

                // mysqli_close($conn);



        $conn = new mysqli($servername, $username, $password, $dbname);

        $firstname = $_GET['first'];
        $lastname = $_GET['last'];
        $country = $_GET['country'];
        $age = $_GET['age'];

 

        // Check connection

        if ($conn->connect_error) {

        die("Connection failed: " . $conn->connect_error);
            echo "<p> bowomp </p>";

        }  else {
            echo "<p> wwwww </p>";
        }

        

        // SQL OPPERATIONS

        $sql = "INSERT INTO randuser (first, last, country, age) VALUES ('$firstname', '$lastname', '$country', $age)";

        echo "<div>";

        if ($conn->query($sql) === TRUE) {

        echo "<p'>New record created successfully</p>";

        } else {
        
            echo "bruh";
        echo "<p'>Error: " . $sql . "<br>" . $conn->error . "</p>";

        }

        echo "</div>"; // close container

        

        // modified from https://www.w3schools.com/php/php_mysql_select.asp

        echo "<div>";

        $sql = "SELECT * FROM randuser";

        $result = $conn->query($sql);

        echo "<h2>Added: $firstname $lastname</h2>";

        

        if ($result->num_rows > 0) {

        echo "<table class='table table-hover'>";

        echo "<thead>";

        echo "  <tr>";

        echo "    <th>First Name</th>";

        echo "    <th>Last Name</th>";

        echo "    <th>Country</th>";

        echo "  </tr>";

        echo "</thead>";

        echo "<tbody>";

        // output data of each row

        while($row = $result->fetch_assoc()) {

            echo "  <tr>";

            echo "    <td>" . $row['first'] . "</td>";

            echo "    <td>" . $row['last'] . "</td>";

            echo "    <td>" . $row['country'] . "</td>";

            echo "  </tr>";

        }

        echo "</tbody>";

        echo "</table>";

        } else {

        echo "0 results";

        }

        

        $conn->close();

        echo "</div>";

        ?>

</body>
</html>