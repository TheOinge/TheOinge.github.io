const getBtn = document.getElementById("getBtn");
const apiData = document.querySelector(".apiData"); // Change to querySelector

getBtn.addEventListener("click", getUser);
let url = "https://randomuser.me/api";

getUser();

function getUser() {
    fetch(url)
        .then(decodeData)
        .then(success, fail);
}

function decodeData(response) {
    if (response.ok) {
        apiData.innerHTML = "response is " + response.status;
        return response.json();
    } else {
        throw response.status;
    }
}

function success(userData) {
    apiData.innerHTML = `<img class="user" src="${userData.results[0].picture.large}" alt="rand user">
    <h2 class="user"> Meet ${userData.results[0].name.first} ${userData.results[0].name.last}</h2>`;

    const apiFirst = userData.results[0].name.first;
    apiForm = document.querySelector("form");
    apiForm.innerHTML = `<input type="hidden" name="first" value="${apiFirst}"/>`;

    const apiLast = userData.results[0].name.last;
    apiForm.innerHTML += `<input type="hidden" name="last" value="${apiLast}"/>`;
    apiForm.innerHTML += `<button><input type="submit" id="addBtn" class="btn" value="Add them"></button>`;
}

function fail(error) {
    apiData.innerHTML = "something went wrong with parsing json";
}
