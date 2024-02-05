a = [1, 2];
b = [3, 4];
c = [5, 6];

// Question: Concatenate the following arrays into one [1, 2], [3, 4], [5, 6] using rest operator.
// rest
combiner = (...arrays) => {
    console.log(arrays);
    combinedArray = [];
    // spread
    arrays.forEach(array => combinedArray.push(...array));
    return combinedArray;
}
console.log(combiner(a, b, c));

// Question: Create a function that will accept any number of integer argument and will return their sum.(rest operator)
adder = (...integers) => {
    sum = 0;
    integers.forEach(number => sum = sum + number)
    return sum;
}
console.log(adder(3, 5, 76, 3, 6, 2, 4, 5, 2, 1));

const { name: fullName, age, address: { city: current_city, country: nation = "India" } } = {
    name: "John Connor",
    age: 28,
    address: {
        city: "New York",
        country: "USA"
    }
}
// Question: Write a program to display the values of object properties with destructuring.
destructure = () => {
    console.log(`${fullName} is ${age} years old and lives in ${current_city} city, ${nation}`)
}
destructure();

// Question: Write a function printPerson which will display name and age of peron object using object destructuring.
printPerson = () => {
    console.log("name : " + fullName + ", age : " + age)
}
printPerson();
