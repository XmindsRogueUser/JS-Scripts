// Question 2 : Build a guessing game
// The requirements:
// A user can enter a number
// The system picks a random number from 1 to 6
// If the user's number is equal to a random number, give the user 2 points
// If the user's number is different than the random number by 1,   give the user 1 point.
// Otherwise, give the user 0 points
// The user can play the game as long as they want to

getUserInput = () => {
    return new Promise((resolve) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question("\tEnter number between 0 and 10.\n\t", (number) => {
            resolve(number);
            readline.close();
        });
    });
};

let getRandomNumber = () => {
    return new Promise((resolve) => {
        resolve(Math.trunc(Math.random() * 10));
    });
};

let calculateScore = (random, input, score) => {
    return new Promise((resolve) => {
        console.log("\tTHE RANDOM NUMBER IS " + random);
        if (random === input) {
            console.log("\tyou got two points");
            score += 2;
        } else if (--random === input || ++random === input) {
            console.log("\tyou got one points");
            ++score;
        } else {
            console.log("\tyou got zero points");
        }
        resolve(score);
    });
};

async function main() {
    console.log("\t++<<>++_++--GUSSING-GAME--++_++<>>++\n\t");
    console.log("\tChoose Q to quit program.");
    //while loop
    // let reset = fasle;
    let quit = false;
    let score = 0;
    let attempt = 0;
    do {
        console.log("\tCurrent attempt : " + attempt);
        let input = await getUserInput();
        if (input.toUpperCase() === "Q") {
            quit = true;
            console.log("\n\tThankyou for playing.\n");
            continue;
        }
        if (isNaN(input) || input > 10) {
            console.error("\tPlease enter a valid number between 1 to 10.");
            continue;
        }
        await getRandomNumber()
            .then((random) => calculateScore(random, input, score))
            .then((newScore) =>
                console.log("\t++<> YOUR SCORE = " + newScore + " <>++\n\t")
            );
        ++attempt;
    } while (!quit);
}

main();
// getUserInput();
