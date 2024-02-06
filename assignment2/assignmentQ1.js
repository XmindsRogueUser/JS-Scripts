// Question 1 : 1.Define an object array posts with id and title as property.
// Define two methods addPost which will add a new post object to the array and getPosts which will display
// all the posts. Implement it suing asynchronous programming.
let postObj = function (id, title) {
    this.id = id;
    this.title = title;
};

addPost = () => {
    return new Promise((resolve) => {
        let postObjArray = [];
        postObjArray.push(new postObj(1, "ABC"));
        postObjArray.push(new postObj(2, "DEF"));
        postObjArray.push(new postObj(3, "GHI"));
        postObjArray.push(new postObj(4, "JKL"));
        postObjArray.push(new postObj(5, "MNO"));
        postObjArray.push(new postObj(6, "PQR"));
        postObjArray.push(new postObj(7, "STU"));
        postObjArray.push(new postObj(8, "VWX"));
        postObjArray.push(new postObj(9, "YZA"));
        postObjArray.push(new postObj(10, "BCD"));
        resolve(postObjArray);
    });
};

getPost = (array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (array.length === 0) {
                reject("No items to display");
            } else {
                let result = "";
                postObjArray.forEach(
                    (obj) => (result += "id: " + obj.id + ", title: " + obj.title + "\n")
                );
                resolve(result);
            }
        }, 1000);
    });
};

// function to handle errors
function handleError(message) {
    return "ERROR : " + message;
}

answerOne = async () => {
    console.log("printing posts...");
    await addPost().then(getPost, handleError).then(console.log);
    console.log("process completed");
};

// run program
answerOne();
