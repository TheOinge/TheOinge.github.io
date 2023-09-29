<!DOCTYPE html>
<html>
<head>
    <title>Form Data Response</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Form Data Response</h1>
    <table>
        <tr>
            <th>Field</th>
            <th>Value(s)</th>
        </tr>
        <?php
        if ($_SERVER["REQUEST_METHOD"] === "POST" || $_SERVER["REQUEST_METHOD"] === "GET") {
            foreach ($_REQUEST as $field => $value) {
                echo "<tr>";
                echo "<td>$field</td>";
                if (is_array($value)) {
                    echo "<td>" . implode(", ", $value) . "</td>";
                } else {
                    echo "<td>$value</td>";
                }
                echo "</tr>";
            }
        }
        ?>
    </table>
</body>
</html>
