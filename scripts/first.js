console.log("program started")

// constant as a function (a random number)
const seed = () => equation(2342, 3423, undefined);
// constant object
const itemObj = {
    Fruites: 345,
    Vegitables: 677,
    Grains: 342,
    Spices: 580,
};

// Single line Arrow function with default parameter
let equation = (a = 1000, b = 1000, difference = a - b) => (a + b) * Math.abs(difference);

// Normal function
normalFunction = function () {
    console.log("inside normal function")
    return "<Not an ARROW FUNCTION>";
}
console.log(normalFunction());

// parent class
class WorldProcessor {
    addBonusItem = (seed, item) => {
        if (seed < 6000000) {
            item.set("Bonus", 1);
        } else {
            item.delete("Spices");
        }
        return item;
    }

}

// Class defenition inheriting WorldProcessor
class World extends WorldProcessor {
    // constructor
    constructor(seed, itemMap) {
        // initialize parent before child
        super();
        this.seed = seed;
        this.items = itemMap;
        this.processItems(itemMap);
        // calling parent class function
        this.items = this.addBonusItem(this.getSeed, this.getItems)
    }

    // defining a method in child class
    processItems = (itemMap) => {
        //looping through map
        for (let [key, value] of itemMap) {
            if (key === "Spices") {
                this.items.set("Spices", 0)
            }
        }
    }

    // seed getter
    get getSeed() {
        return this.seed;
    }

    // item getter
    get getItems() {
        return this.items;
    }


    // seed setter
    set setSeed(seed) {
        this.seed = seed;
    }
    // item setter
    set setItems(items) {
        this.items = items;
    }
}

// Arrow function
let arrowFunction = () => {
    console.log("inside an arrow function")

    let itemMap = new Map();
    itemMap.set("Fruites", itemObj.Fruites);
    itemMap.set("Vegitables", itemObj.Vegitables);
    itemMap.set("Grains", itemObj.Grains);
    itemMap.set("Spices", itemObj.Spices);
    let world = new World(seed(), itemMap);
    // forEach loop
    world.items.forEach((v, k) => {
        console.log(k + ", " + v);
    })

    // learn sets
    const setOfNumbers = new Set(itemMap.values());
    // adding duplicate entry to set
    setOfNumbers.add(itemObj.Fruites);
    // checking if the set size changed
    if (setOfNumbers.size != 3)
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

// run the program
console.log(arrowFunction());
