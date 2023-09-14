function isStrongPassword(password) {
  if (password.length < 8) { // checks length
      return false;
  }

  if (password.toLowerCase().includes("password")) { // password is not a password
      return false;
  }

  let hasDigit = false;
  for (let i = 0; i < password.length; i++) { // checks the charcode to make sure the pswd has numbers
      const charCode = password.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
          hasDigit = true;
          break;
      }
  }

  if (!hasDigit) { // easy way out
      return false;
  }

  return true; // password passes
}

document.getElementById("checkButton").addEventListener("click", function () {  // testing out eventListeners and
  const passwordInput = document.getElementById("passwordInput");               // changing text in an html file
  const resultElement = document.getElementById("result");
  const password = passwordInput.value;
  console.log(password)

  if (isStrongPassword(password)) {
      resultElement.innerText = "Password is strong!";
  } else {
      resultElement.innerText = "Password does not meet the criteria.";
  }
});
  
  console.log(isStrongPassword("qwerty1")); // false
  console.log(isStrongPassword("qwertypassword1")); // false
  console.log(isStrongPassword("qwertyABC")); // false
  console.log(isStrongPassword("qwerty123")); // true
  