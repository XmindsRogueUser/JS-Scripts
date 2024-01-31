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
    return "seed = " + world.seed + ", item size = " + world.items.size;

}
console.log(arrowFunction());
