a = [1, 2];
b = [3, 4];
c = [5, 6];

// Question: Concatenate the following arrays into one [1, 2], [3, 4], [5, 6] using rest operator.
// rest
combiner = (...arrays) => {
    console.log(arrays);
    // spread
    return [...a, ...b, ...c];
}
console.log(combiner(a, b, c));

// Question: Create a function that will accept any number of integer argument and will return their sum.(rest operator)
adder = (...integers) => {
    sum = 0;
    integers.forEach(number => sum += number)
    return sum;
}
console.log(adder(3, 5, 76, 3, 6, 2, 4, 5, 2, 1));

const person = {
    name: "John Connor",
    age: 28,
    address: {
        city: "New York",
        country: "USA"
    }
}
const { name: fullName, age, address: { city: current_city, country: nation = "India" } } = person
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

const item = {
    name: "Shoes",
    Size: {
        EU: 44,
        US: 18
    },
    Status: "live",
    Price: 2700
}

// Question: Define a convert currency function that takes an amount and returns an object that has 
// U.S. dollars, British pounds, Australian dollars, and Mexican pesos using destructuring display each 
// currency value individually.
let convertCurrency = (value) => {
    const rupeeValueInUsDollar = 0.012;
    const rupeeValueInBritishPounds = 0.0096;
    const rupeeValueInAustrailianDoller = 0.019;
    const rupeeValueInMexicanPesos = 0.21;
    return {
        indianRupee: value,
        usDoller: (value * rupeeValueInUsDollar).toFixed(2),
        britishPounds: (value * rupeeValueInBritishPounds).toFixed(2),
        austrailianDollars: (value * rupeeValueInAustrailianDoller).toFixed(2),
        mexicanPesos: (value * rupeeValueInMexicanPesos).toFixed(2)
    }
}

// Question: Display values of the following object with object destructuring.
let displayItemDetails = () => {
    const { name: itemName, Size: { EU: euSize, US: usSize }, Status: itemsStatus, Price } = item;
    const { indianRupee: IR, usDoller: UD, britishPounds: BP, austrailianDollars: AD, mexicanPesos: MP } = convertCurrency(Price);
    console.log("\n--------*---------\nItem\t" + itemName + "\nSize\t(EU = " + euSize + ")(US = " + usSize
        + ")\nStatus\t" + itemsStatus + "\nPrice:\t" + IR + " Indian Rupees" + "\n\t" + UD + " US Dollar"
        + "\n\t" + BP + " British Pounds" + "\n\t" + AD + " Australian Dollars" + "\n\t" + MP + " Mexican Pesos")
}
displayItemDetails();
