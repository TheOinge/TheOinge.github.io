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
      foreach ($_POST as $key => $value) {
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
    ?>
  </table>
</body>
</html>