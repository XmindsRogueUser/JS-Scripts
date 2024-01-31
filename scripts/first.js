console.log("program started")

// constant as a function
const seed = () => equation(2342, 3423, undefined);
// constant object
const itemObj = {
    DGS: 345,
    TYI: 677,
    RTL: 342,
    QRF: 580,
};

// Single line Arrow function with default parameter
let equation = (a = 1000, b = 1000, difference = a - b) => (a + b) * Math.abs(difference);

// Normal function
normalFunction = function () {
    console.log("inside normal function")
    return "<Not an ARROW FUNCTION>";
}
console.log(normalFunction());

class World {
    constructor(seed, itemMap) {
        this.seed = seed;
        this.items = itemMap;
        //looping through map
        for (let [key, value] of itemMap) {
            if (key === "QRF") {
                this.items.set("QRF", 0)
            }
        }

    }
}

// Arrow function
let arrowFunction = () => {
    console.log("inside arrow function")

    let itemMap = new Map();
    itemMap.set("DGS", itemObj.DGS);
    itemMap.set("TYI", itemObj.TYI);
    itemMap.set("RTL", itemObj.RTL);
    itemMap.set("QRF", itemObj.QRF);
    let world = new World(seed(), itemMap);
    world.items.forEach((v, k) => {
        console.log(k + ", " + v);
    })

    //learn sets 
    const setOfNumbers = new Set(itemMap.values());
    setOfNumbers.add(itemObj.DGS);
    if (setOfNumbers.size != 4)
        throw new Error("Unexpected behaviour expressed by set");

    // array using constructor notation
    const arrayConstructor = new Array(1, 2, 3);
    console.log(arrayConstructor);

    // array using literal notation
    const arrayItems = [];
    for (let i of setOfNumbers) {
        arrayItems.push(i)
    }
    console.log(arrayItems);
    return "seed = " + world.seed + ", item size = " + world.items.size;
}
console.log(arrowFunction());
