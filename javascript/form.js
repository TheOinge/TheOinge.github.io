document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dataForm");
    const responseDiv = document.getElementById("response");
    const responseDataTable = document.getElementById("responseData");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Create an object to store form data
        const formData = new FormData(form);

        // Prepare the table rows to display the data
        let tableRows = "";
        formData.forEach(function(value, key) {
            // Handle arrays by joining values with commas
            if (Array.isArray(value)) {
                value = value.join(", ");
            }
            tableRows += `<tr><td>${key}</td><td>${value}</td></tr>`;
        });

        // Display the response data in the table
        responseDataTable.innerHTML = tableRows;

        // Show the response div
        responseDiv.style.display = "block";
    });
});
