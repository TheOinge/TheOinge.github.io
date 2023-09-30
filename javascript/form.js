document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dataForm");
    const responseDiv = document.getElementById("response");
    const responseDataTable = document.getElementById("responseData");
    const formUrlInput = document.getElementById("form_url"); // Get the input field

    // Check if the form element exists before adding the event listener
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Get the user-entered URL
            const formUrl = formUrlInput.value;

            // Check if the input is a valid URL
            if (isValidURL(formUrl)) {
                // Set the form's action attribute to the user's URL
                form.action = formUrl;

                // Programmatically submit the form to the new URL
                form.submit();

                // You can optionally hide the response div or perform other actions here
                responseDiv.style.display = "none"; // Hide the response div
            } else {
                alert("Please enter a valid URL.");
            }
        });
    }

    // Function to validate a URL
    function isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }
});
