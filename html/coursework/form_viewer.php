<!DOCTYPE html>
<html>
<head>
  <title>Form Viewer</title>
  <style>
    table {
      border-collapse: collapse;
    }

    table, th, td {
      border: 1px solid black;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h1>Form Data Viewer</h1>
  <table>
    <tr>
      <th>Field</th>
      <th>Value(s)</th>
    </tr>
    <?php
      if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'GET') { // Check the HTTP method
        foreach ($_REQUEST as $key => $value) { // Use $_REQUEST to handle both GET and POST
          echo "<tr>";
          echo "<td>$key</td>";
          echo "<td>";
          if (is_array($value)) {
            echo implode(", ", $value);
          } else {
            echo $value;
          }
          echo "</td>";
          echo "</tr>";
        }
      } else {
        echo "<tr><td colspan='2'>Invalid HTTP method</td></tr>";
      }
    ?>
  </table>
</body>
</html>