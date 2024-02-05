// Iterate over the nested object and output the property values

const person = {
    name: "Johny",
    Age: 40,
    cars: [
        {
            name: "ford",
            model: ["Mustang", "Endavor", "Focus"]
        },
        {
            name: "BMW",
            models: ["M3 GTR", "X3", "X5"]
        },
        {
            name: "fiat",
            models: ["punto", "500X"]
        }
    ]
}

// listing using recursive function
function listPropertyValuesRecursive(object = person, baseKey = "root", isArray = false) {
    const objKeys = Object.keys(object);
    console.log("------" + baseKey + "-------")
    for (let key of objKeys) {
        currentKeyIsArray = false;
        if (Array.isArray(object[key]))
            currentKeyIsArray = true;

        // compare if value is an object
        if ((currentKeyIsArray || typeof object[key] === "object") && object[key] !== null) {
            let objectKey = key;
            if (isArray) {
                objectKey = `item ${key} of ${baseKey}`
            }
            listPropertyValuesRecursive(object[key], objectKey, currentKeyIsArray);
        } else {
            console.log(key + ": " + object[key]);
        }
    }
}
console.log("\nListing using recursive function")
listPropertyValuesRecursive();
