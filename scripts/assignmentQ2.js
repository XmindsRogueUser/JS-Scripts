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


// listing using map and filter
function listPropertyValuesMapFunction(object = person) {
    const objKeys = Object.keys(object);
    for (let key of objKeys) {
        if (Array.isArray(object[key])) {
            processedArray = object[key].map(mapArray).filter(filterArray)
            if (processedArray.length !== 0) {
                console.log(processedArray);
            }
        } else {
            console.log(key + ": " + object[key]);
        }
    }
}

function mapArray(value, index) {
    if ((Array.isArray(value) || typeof value === "object") && value !== null) {
        listPropertyValuesMapFunction(value)
    } else
        return "element" + index + " is " + value;
}

function filterArray(value) {
    if (value === undefined || value === null) {
        return false;
    }
    return true;
}
console.log("\nListing using map and filter")
listPropertyValuesMapFunction();
