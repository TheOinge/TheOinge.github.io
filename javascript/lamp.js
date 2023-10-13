let url = "https://randomuser.me/api"
const getBtn = document.getElementById("getBtn")
const apiData = document.getElementById("apiData")

getBtn.addEventListener("click", getUser)

getUser()

function getUser(){
    fetch(url)
    .then(decodeData)
    .then(success, fail);
}

function decodeData(response){

    if(response.ok) {
        apiData.innerHTML = "response is " + response.status;
        return (response.json())
    } else {
        throw response.status
    }

}

function success(userData) {
    const apiFirst = userData.results[0].name.first;
    const apiLast = userData.results[0].name.last;
    const apiCountry = userData.results[0].location.country;
    const apiAge = userData.results[0].dob.age;
    // console.log(apiFirst)
    // console.log(apiLast)
    // console.log(apiCountry)
    // console.log(apiAge)

    const apiFirstInput = document.getElementById("apiFirst");
    apiFirstInput.value = apiFirst;

    // Update the value of the existing input fields
    const addBtn = document.getElementById("addBtn");
    addBtn.value = "Add This One";

    // Update the other parts of the displayed user data
    apiData.innerHTML = `
        <img class="user" src="${userData.results[0].picture.large}" alt="Random User">
        <h2 class="user">Meet ${apiFirst} ${apiLast}</h2>
    `;

    // Update hidden form fields for last name, country, and age
    document.querySelector("input[name='last']").value = apiLast;
    document.querySelector("input[name='country']").value = apiCountry;
    document.querySelector("input[name='age']").value = apiAge;
}



function fail(error) {
    apiData.innerHTML = "Something went wrong with parsing JSON."
    mdnCodes = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
    apiData.innerHTML+= `<br>The problem: <a href=${mdnCodes}>${error} Error</a>`
}