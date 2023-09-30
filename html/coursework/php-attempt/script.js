
// get the input box element
const fvbox = document.getElementById("fv");
// on input, evaluate task...
fvbox.addEventListener("input", handleInput);

// get the first (and only) form element; get it's value
form = document.querySelector("form");

function handleInput() {
    // if it's there, change form action to input box string
    if(fvbox.value != ""){
        form.setAttribute("action", fvbox.value)
    }
    else {
        fvdefault = "./form-viewer.php";
        form.setAttribute("action", fvdefault);
    }
}