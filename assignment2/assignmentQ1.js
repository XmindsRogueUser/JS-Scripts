// Question 1 : 1.Define an object array posts with id and title as property.
// Define two methods addPost which will add a new post object to the array and getPosts which will display
// all the posts. Implement it suing asynchronous programming.
let postObjArray = [{ id: 1, title: "ABC" }, { id: 2, title: "DEF" }, { id: 3, title: "GHI" }];

let postObj = function (id, title) {
    this.id = id;
    this.title = title;
};

addPost = (post) => {
    return new Promise((resolve) => {
        postObjArray.push(post);
        resolve(post);
    });
};

getPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (postObjArray.length == 0) {
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
    await addPost(new postObj(4, "JKL"));
    await addPost(new postObj(5, "MNO"));
    await addPost(new postObj(6, "PQR"));
    await addPost(new postObj(7, "STU"));
    await addPost(new postObj(8, "VWX"));
    await addPost(new postObj(9, "YZA"));
    await addPost(new postObj(10, "BCD"));
    let dataFrame = await getPost().catch(handleError);
    console.log(dataFrame);
};

// run program
answerOne();
