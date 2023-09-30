<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Response</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Form Response</h1>
    <h2>HTTP Method Used: <?php echo $_SERVER['REQUEST_METHOD'] ?></h2>
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Value(s)</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($_REQUEST as $field => $value) {
                echo "<tr>";
                echo "<td>$field</td>";
                if (is_array($value)) {
                    echo "<td>" . implode(', ', $value) . "</td>";
                } else {
                    echo "<td>$value</td>";
                }
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>
