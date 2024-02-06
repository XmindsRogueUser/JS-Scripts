// user object
const johnObj = {
    userId: 100,
    username: "John Conner",
};

// -----chain function 1-----
function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log("Get user from the database.");
        setTimeout(() => {
            // will complete the procsess and return the resolve before moving on to getServices().
            if (userId === 100) {
                console.log("Returning obtained result");
                resolve(johnObj);
            } else {
                reject("No users found with id " + userId);
            }
        }, 1000);
        // this log will be shown first
        console.log("Contacting Database...");
    });
}

// -----chain function 2-----
function getServices(user) {
    return new Promise((resolve) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(["Email", "VPN", "CDN"]);
        }, 2 * 1000);
    });
}

// -----chain function 3-----
function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        if (services == undefined) {
            reject("no services found for user");
        } else {
            console.log(`Calculate service costs of ${services}.`);
            setTimeout(() => {
                resolve(services.length * 100);
            }, 3 * 1000);
        }
    });
}

// function to handle errors
function handleError(message) {
    console.error("ERROR : " + message);
}

// function main
function main(id = 100) {
    let cost = getUser(id)
        // handle with promise.then(onFulfilled,onRejected);
        .then(getServices, handleError)
        // handle with catch
        .then(getServiceCost)
        .catch(handleError);
    // this will print before result is processed
    console.log("result with async function = " + cost);
}

// function using async await
async function asyncMain(id) {
    // handle with normal try catch
    try {
        let cost = await getUser(id).then(getServices).then(getServiceCost);
        console.log("result with async await function = " + cost);
    } catch (err) {
        console.error("An error occured : " + err);
    } finally {
        console.log("Program teminated\n")
    }
}

console.log("\n Program running..");

// #successfull async await
// asyncMain(100);

// #rejected async await
// asyncMain(50);

// #successfull async
// main(100);

// #rejected async
main(0);
