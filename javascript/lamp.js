const url = "https://randomuser.me/api"
const getBtn = document.getElementById("getBtn")
const apiData = document.getElementById("adiData")

getBtn.addEventListener("click", getUser)

getUser()

function getUser(){
    apiData.innerHTML = "BONSOIR!"
}