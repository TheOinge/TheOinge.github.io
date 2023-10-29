document.getElementById('calculator').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh
  
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation-display').textContent;
    let result;
  
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '×':
        result = num1 * num2;
        break;
      case '÷':
        result = num1 / num2;
        break;
      case '≤':
        result = num1 <= num2;
        break;
      case '≥':
        result = num1 >= num2;
        break;
      default:
        result = 'Invalid operation';
    }
  
    document.getElementById('result').textContent = `${result}`;
  });
  
  // Event listeners for operator buttons to update the operation display
  document.querySelectorAll('.operation-buttons button').forEach(function (button) {
    button.addEventListener('click', function () {
      document.getElementById('operation-display').textContent = button.textContent;
    });
  });
  