getBtn.addEventListener("click", getUser);
let url = "https://randomuser.me/api"

function getUser() {
    fetch(url)
    .then(decodeData)
    .then(success)
    .catch(fail);
}

function decodeData(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw response.status;
    }
}

function success(userData) {
    const apiData = document.getElementById("apiData");
    const apiform = document.querySelector("form");
    
    apiData.innerHTML = `
        <img class="user" src="${userData.results[0].picture.large}" alt="random user"/>
        <h2 class="user">Meet ${userData.results[0].name.first} ${userData.results[0].name.last}</h2>
    `;

    const apiFirst = userData.results[0].name.first;
    const apiLast = userData.results[0].name.last;
    const apiCountry = userData.results[0].location.country;
    const apiAge = userData.results[0].dob.age;

    // Update the input values with the correct data
    apiform.querySelector('input[name="first"]').value = apiFirst;
    apiform.querySelector('input[name="last"]').value = apiLast;
    apiform.querySelector('input[name="country"]').value = apiCountry;
    apiform.querySelector('input[name="age"]').value = apiAge;
    
    // Add the submit button to the form
    apiform.innerHTML += `<input type="submit" id="addBtn" class="btn" value="Add this person">`;
}


function fail(error) {
    const apiData = document.getElementById("apiData");
    apiData.innerHTML = "Something went wrong with parsing JSON.";
    apiData.innerHTML += `<br>The problem: ${error} Error`;
}
