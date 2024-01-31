console.log("program started")

// Normal function
normalFunction = (function(){
    return "<Not an ARROW FUNCTION>";
})
console.log(normalFunction())

// Arrow function
arrowFunction = (() => {
    return "<ARROW FUNCTION>";
})
console.log(arrowFunction())

// Single line Arrow function
addition = (a, b) => a + b;
console.log(addition(3,4))