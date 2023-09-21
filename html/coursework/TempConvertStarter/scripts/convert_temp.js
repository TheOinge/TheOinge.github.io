window.addEventListener("DOMContentLoaded", domLoaded);

// When the DOM has finished loading, add the event listeners.
function domLoaded() {
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener

   const convertButton = document.getElementById("convertButton");
   convertButton.addEventListener("click", handleConversion);

   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback. 
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})
   const fInput = document.getElementById("F_in");
   const cInput = document.getElementById("C_in");

   fInput.addEventListener("input", function() {
      cInput.value = ""; // Clear the °F input when °C input changes.
    });

   cInput.addEventListener("input", function() {
      fInput.value = "";
   });

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)

function convertCtoF(C) {
   // TODO: Return temp in °F. 
   return C * 9/5 + 32
}

function convertFtoC(F) {
   // TODO: Return temp in °C. 
   return (F - 32) * 5/9
}

// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
function displayWeatherIcon(tempF) {
   const weatherIcon = document.getElementById("weatherIcon");
   const message = document.getElementById("message");
 
   if (isNaN(tempF) || tempF === "") {
     weatherIcon.src = "images/C-F.png"; // Default image for blank input fields.
     message.textContent = "Enter a temperature to convert.";
   } else if (tempF <= -200 || tempF >= 200) {
     weatherIcon.src = "images/dead.png";
     message.textContent = "";
   } else if (tempF <= 32) {
     weatherIcon.src = "images/cold.png";
     message.textContent = "";
   } else if (tempF >= 90) {
     weatherIcon.src = "images/hot.png";
     message.textContent = "";
   } else {
     weatherIcon.src = "images/cool.png";
     message.textContent = "";
   }
 }
 
 function handleConversion() {
   const cInput = document.getElementById("C_in");
   const fInput = document.getElementById("F_in");
 
   const cValue = parseFloat(cInput.value);
   const fValue = parseFloat(fInput.value);
 
   if (!isNaN(cValue)) {
     // Convert from °C to °F and update the °F input field.
     fInput.value = convertCtoF(cValue);
     displayWeatherIcon(fInput.value);
   } else if (!isNaN(fValue)) {
     // Convert from °F to °C and update the °C input field.
     cInput.value = convertFtoC(fValue);
     displayWeatherIcon(fValue);
   } else {
     // Display a message when both input fields are empty.
     displayWeatherIcon("");
   }
 }