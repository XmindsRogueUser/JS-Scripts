// Question 4: Create todo app for creating ,listing,updating deleting tasks with arrays.
// Create task as an object with id and title as properties.

// hardcoded messages
const ENTER_COMMAND_MESSAGE =
    "\nEnter C to create task, enter U to update task, enter D to delete task and enter L to list task : \n\t";
const CREATE_TASK_MESSAGE = `Enter json input in the form {"title": "stuff to do", "description": "description of the task"}\n\t`;
const UPDATE_TASK_MESSAGE = `Enter json input in the form {"id": 1, "title": "stuff to do", "description": "description of the task", "done": true}\n\t`;
const DELETE_TASK_MESSAGE = `Enter id of the task to be deleted : `;

// dataFrame with sample values
const table = [{ "title": "Task1", "description": "do laundry", "done": false }, { "title": "Complete Assignment", "description": "", "done": false }, { "title": "Learn stuff", "description": "Learn arrays and Objects", "done": true }];

// task constructor
let task = function (title, description, done = fasle) {
    this.title = title;
    this.description = description;
    this.done = done;
};

// Get the input from user
getUserInput = (requestInput) => {
    return new Promise((resolve) => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question(requestInput, (inpData) => {
            resolve(inpData);
            readline.close();
        });
    });
};

// create task object
createTask = (json) => {
    objectData = JSON.parse(json);
    table.push(new task(objectData.title, objectData.description));
    return table.length - 1;
};

// update task object
updateTask = (json) => {
    objectData = JSON.parse(json);
    validateId(objectData.id);
    table[objectData.id].title = objectData.title;
    table[objectData.id].description = objectData.description;
    table[objectData.id].done = objectData.done;
    return objectData.id;
};

// delete task object
deleteTask = (id) => {
    validateId(id);
    table.splice(id, 1);
    return id;
};

// validate array index
validateId = (id) => {
    if (id >= table.length || id < 0) {
        throw new Error("No element found with Id " + id);
    }
};

// list task objects
listTask = () => {
    table.forEach((element, index) =>
        console.log(
            index +
            ",  " +
            element.title +
            ",  " +
            element.description +
            ",  " +
            element.done
        )
    );
};

main = async () => {
    let quit = false;
    console.log("Press Q to quit program any time.");
    do {
        let input = await getUserInput(ENTER_COMMAND_MESSAGE);
        switch (input.toUpperCase()) {
            case "Q":
                quit = true;
                continue;
            case "C":
                try {
                    let savedTaskId = createTask(await getUserInput(CREATE_TASK_MESSAGE));
                    console.log("Task with id " + savedTaskId + " added successfully");
                } catch (error) {
                    console.error("An error occured while creating a task ", error);
                }
                break;
            case "U":
                try {
                    let savedTaskId = updateTask(await getUserInput(UPDATE_TASK_MESSAGE));
                    console.log("Task with id " + savedTaskId + " updated successfully");
                } catch (error) {
                    console.error("An error occured while updating a task ", error);
                }
                break;
            case "D":
                try {
                    let deletedTaskId = deleteTask(await getUserInput(DELETE_TASK_MESSAGE));
                    console.log(
                        "Task with id " + deletedTaskId + " deleted successfully"
                    );
                } catch (error) {
                    console.error("An error occured while deleting a task ", error);
                }
                break;
            case "L":
                listTask();
                break;
            default:
                console.log("Invalid Command");
        }
    } while (!quit);
};

//Run program
main();
