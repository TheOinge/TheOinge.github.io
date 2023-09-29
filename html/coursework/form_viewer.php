<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Viewer</title>
    <link rel="stylesheet" href="../../css/form.css">
</head>
<body>
    <h1>Form Data Viewer</h1>
    <table>
        <tr>
            <th>Field</th>
            <th>Value(s)</th>
        </tr>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            foreach ($_POST as $key => $value) {
                if (is_array($value)) {
                    $value = implode(', ', $value);
                }
                echo "<tr><td>$key</td><td>$value</td></tr>";
            }
        }
        ?>
    </table>
</body>
</html>
