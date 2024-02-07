// Question 2 : Build a guessing game
// The requirements:
// A user can enter a number
// The system picks a random number from 1 to 6
// If the user's number is equal to a random number, give the user 2 points
// If the user's number is different than the random number by 1,   give the user 1 point.
// Otherwise, give the user 0 points
// The user can play the game as long as they want to

let quit = false;
let score = 0;
let attempt = 0;

// Get the input number from user
getUserInput = () => {
    return new Promise((resolve) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question("\tEnter a number between 0 and 10.\n\t", (number) => {
            resolve(number);
            readline.close();
        });
    });
};

// Generate random integer between 1 and 10
let getRandomNumber = () => {
    return new Promise((resolve) => resolve(Math.trunc(Math.random() * 10)));
};

// Add the score
let calculateScore = (random, input, score) => {
    return new Promise((resolve) => {
        let newScore = score;
        if (random == input) newScore = score + 2;
        else if (random + 1 == input || random - 1 == input) newScore = score + 1;
        console.log("\tYou got " + (newScore - score) + " points");
        resolve(newScore);
    });
};

async function main() {
    console.log(
        "\t++<<>++_++--GUESSING-GAME--++_++<>>++\n\n\tChoose Q to quit program anytime."
    );
    do {
        console.log(
            "\nCurrent attempt: " + attempt + "\t\t\tcurrent score: " + score
        );
        let input = await getUserInput();
        // show final score and quit program
        if (input.toUpperCase() === "Q") {
            quit = true;
            console.log("\n\tThankyou for playing.\n\tTOTAL SCORE : " + score);
            continue;
        }
        // handle invalid input
        if (isNaN(input) || input > 10 || input < 0) {
            console.error("\tPlease enter a valid number between 1 to 10.");
            continue;
        }
        let random = await getRandomNumber();
        console.log("\tTHE GUESSED NUMBER IS " + random);
        score = await calculateScore(random, input, score);
        ++attempt;
    } while (!quit);
}

// launch program
main();
