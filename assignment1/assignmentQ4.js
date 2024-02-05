// Question : Write a JavaScript program to compare two objects to determine if the first one contains equivalent 
// property values to the second one?
function isEqual(object1, object2) {
    // return false if both obj are not of same type
    if (object && typeof object1 != typeof object2) return false;
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
    // return false if key length is different
    if (objKeys1.length !== objKeys2.length) return false;
    for (let key of objKeys1) {
        // compare if value is an object
        if (typeof object1[key] === "object" && object1[key] !== null) {
            if (!isEqual(object1[key], object2[key])) return false;
        }
        // compare if value is a literal
        if (object1[key] !== object2[key]) return false;
    }
    return true;
}

// Question : Check whether an object is empty.
objectIsEmpty = (object) => {
    if (!object) {
        console.log("The object is either null or undefined");
        return false;
    } else if (Object.keys(object).length === 0) {
        console.log("The object is empty");
        return true;
    } else {
        console.log(
            "object is not empty : " +
            Object.keys(object) +
            " length = " +
            Object.keys(object).length
        );
        return false;
    }
};

// Question : Write a function to check whether the following variable data contains some value.If there is a value 
// function should return true otherwise false.
variableIsNotEmpty = (value) => {
    if (!value) return false;
    return true;
};

let student = function (rollno, degree, duration, name, age) {
    this.rollno = rollno;
    this.degree = degree;
    this.duration = duration;
    this.name = name;
    this.age = age;
};

function main() {
    let student1 = new student(111, "M.SC", "2 Years", "John", "22");
    let student2 = new student(113, "M.SC", "2 Years", "Connor", "23");
    let student3 = new student(113, "M.SC", "2 Years", "Connor", "23");

    let data1 = "Hello Xmindians";
    let data2 = "";
    let data3 = "";
    let data4 = undefined;
    let data5 = null;
    console.log("\n==>check if the objects are equal==")
    console.log("unequal object check => " + isEqual(student1, student2));
    console.log("equal object check => " + isEqual(student3, student2));

    console.log("\n==>check empty variables==");
    console.log(data1 + " => " + variableIsNotEmpty(data1));
    console.log(data2 + " => " + variableIsNotEmpty(data2));
    console.log(data3 + " => " + variableIsNotEmpty(data3));
    console.log(data4 + " => " + variableIsNotEmpty(data4));
    console.log(data5 + " => " + variableIsNotEmpty(data5));

    console.log("\n==>check if the objects are empty==");
    // non empty object
    objectIsEmpty(student1);
    // empty object
    objectIsEmpty(new Object());
}

// run program
main();
