// array

const groc = ["milk", "eggs", "bread", 5, "asprin"]
let numItems = groc.length

// console.log(typeof(groc));
// console.log(typeof(numItems));

for (let i = 0; i < numItems; i++) {
    console.log(i + ": " + groc[i])
}

console.log("")

for (let item of groc) {
    console.log(item)
}

console.log("")
groc.forEach(doThis);



function doThis(item, index) {
    console.log(index + ": " + item)
}

// working with objects

const car = {
    make: "SUBARU",
    model: "IMPREZA",
    color: "red" 
}

// shows what a js object looks like
console.log(car)

for(let property in car) {
    console.log(property + ": " + car[property]) // could also use car.property
}
