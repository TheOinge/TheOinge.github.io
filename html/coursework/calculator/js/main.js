const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", hello)
h1.addEventListener("mouseout", goodbye)

const msg = document.getElementById("message");
const add_btn = document.getElementById("plus")
const sub_btn = document.getElementById("minus")
const mult_btn = document.getElementById("times")
const div_btn = document.getElementById("divide")

const output = document.getElementById("answer")

// Loads NaN when page loads if placed here:
// const num1 = parseFloat(document.getElementById("val1").value)

add_btn.addEventListener("click", add)

sub_btn.addEventListener("click", subtract)

mult_btn.addEventListener('click', ()=>{
    let nums = getOperators();
    output.innerHTML = nums!=undefined ? nums[0] * nums[1] : '?';
})

div_btn.addEventListener('click', divide)

function hello() {
    // alert("Hello, DOM!")
    // lert("Hello, " + h1.innerHTML)
    msg.innerHTML = "Hello, " + h1.innerHTML;
}
function goodbye() {  msg.innerHTML = ""; }

function getOperators(){
    const num1 = parseFloat(document.getElementById("val1").value)
    const num2 = parseFloat(document.getElementById("val2").value)
    if (!isNaN(num1) && !isNaN(num2)) {
        return [num1, num2];
    }
    else {
        msg.innerHTML = "Invalid input";
        return undefined;
    }
}

function add() {
    const num1 = parseFloat(document.getElementById("val1").value)
    const num2 = parseFloat(document.getElementById("val2").value)
    let result = num1 + num2;
    output.innerHTML = result; // but what if there's nothing a box??
    
    // let nums = getOperators();
    // output.innerHTML = nums!=undefined ? nums[0] + nums[1] : '?';
}

function subtract() {
    let nums = getOperators();
    output.innerHTML = nums!=undefined ? nums[0] - nums[1] : '?';
}
function divide() {
    let nums = getOperators();
    output.innerHTML = nums!=undefined ? nums[0] / nums[1] : '?';
}