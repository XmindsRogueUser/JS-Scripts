function heavyTask(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0) {
        n--;
    }
    console.log("Image has been processed " + message);
}

// ------------------------Async Function-------------------------------
function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        callback(url);
        console.log("Task complete!");
    }, 1000);
    console.log("A new task is running");
}

// passing anonymous function
download("http://www.google.com/lpl.img", (url) => {
    console.log("Image processed by anonymous function " + url);
});

// passing a heavy task
download("http://www.google.com/lpl.img", heavyTask);

// ----------------------------Call Backs---------------------------
function isOdd(number) {
    return number % 2 != 0;
}
function isEven(number) {
    return number % 2 == 0;
}

function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
        if (fn(number)) {
            results.push(number);
        }
    }
    return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];

console.log("Odd numbers  : " + filter(numbers, isOdd));
console.log("Even numbers : " + filter(numbers, isEven));
