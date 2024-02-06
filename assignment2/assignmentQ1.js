// Question 1 : 1.Define an object array posts with id and title as property.
// Define two methods addPost which will add a new post object to the array and getPosts which will display
// all the posts. Implement it suing asynchronous programming.

let postObjArray = [];

let postObj = function (id, title) {
    this.id = id;
    this.title = title;
};

addPost = (id, title) => {
    postObjArray.push(new postObj(id, title));
};

getPost = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result = "";
            postObjArray.forEach(
                (obj) => (result += "id: " + obj.id + ", title: " + obj.title + "\n")
            );
            resolve(result);
        }, 1000);
    });
};

answerOne = () => {
    addPost(1, "ABC");
    addPost(2, "DEF");
    addPost(3, "GHI");
    addPost(4, "JKL");
    addPost(5, "MNO");
    addPost(6, "PQR");
    addPost(7, "STU");
    addPost(8, "VWX");
    addPost(9, "YZA");
    addPost(10, "BCD");
    getPost().then(console.log);
    console.log("printing posts...");
};

answerOne();
