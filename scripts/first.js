console.log("program started")

// constant as a function
const seed = () => equation(2342, 3423, undefined);

// Normal function
normalFunction = function () {
    console.log("inside normal function")
    return "<Not an ARROW FUNCTION>";
}
console.log(normalFunction())

// Arrow function
var arrowFunction = () => {
    console.log("inside arrow function")
    return "<ARROW FUNCTION>";
}
console.log(arrowFunction())

// Single line Arrow function with default parameter
let equation = (a = 1000, b = 1000, difference = a - b) => (a + b) * Math.abs(difference);
console.log(seed())
