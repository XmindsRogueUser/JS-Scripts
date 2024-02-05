//Array destructuring examples
function arrayDestructuringMain() {
    const [, firstName, lastName, website] = [
        "na",
        "Oluwatobi",
        "Sofela",
        "codesweetly.com"
    ];
    console.log(`The website of ${firstName} ${lastName} is ${website}`);
    customer = ["Steve", "Jablosky", "+919732586618", "stevejablosky@gmail.com", "Mumbai", "India"]
    contactInfo(customer);

    //combine arrays using spread operator
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo];
}

//Object destructuring examples
function objectDestructuringMain() {
    const car = {
        model: "M3",
        brand: "BMW",
        color: "Mantis Green",
        stats: {
            "horses": 450,
            "topSpeed": 360
        }
    };
    const { model, brand, color: colour, stats: { horses: hp } } = car;
    console.log(`The colour of the ${brand} ${model} is ${colour} and is capable of producing ${hp} break horse power.`)
}

contactInfo = ([firstName, lastName, ...contact] = []) => {
    console.log(`${firstName} ${lastName}\n${contact}`);
}

//Run program
arrayDestructuringMain();
objectDestructuringMain();