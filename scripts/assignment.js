// Write a java script program to create an Object of student with key value pairs
// (
//      rollno,
//      course,
//      duration,
//      start date,
//      end date,
//      garde
//   )
// and method getStudentData to display property value in the console and setStudentData method to
// assign value to properties. Create 2 objects and compare the objects to determine if the first one
// contains equivalent property values as in the second one?


const defaultStudent = {
    rollno: 27,
    course: "Computer science",
    duration: "3 years",
    startDate: "2016-08-05",
    endDate: "2019-03-25",
    garde: "B",
    get getRollno() { return this.rollno },
    get getCourse() { return this.course },
    get getDuration() { return this.duration },
    get getStartDate() { return this.startDate },
    get getEndDate() { return this.endDate },
    get getGarde() { return this.garde },
    get getStudentData() { return this },
    set setRollno(rollno) { return this.rollno = rollno },
    set setCourse(course) { return this.course = course },
    set setDuration(duration) { return this.duration = duration },
    set setStartDate(startDate) { return this.startDate = startDate },
    set setEndDate(endDate) { return this.endDate = endDate },
    set setGarde(garde) { return this.garde = garde }
};

const defaultNestedObj = {
    name: "John",
    age: 15
}

function isEqual(object1, object2) {

    // return false if both obj are of same type
    if (typeof object1 != typeof object2) return false;

    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);
    // return false if key length is different
    if (objKeys1.length !== objKeys2.length) {
        return false;
    }
    for (let key of objKeys1) {
        // compare if value is a nested object
        if (typeof object1[key] === 'object' && object1[key] !== null) {
            if (!isEqual(object1[key], object2[key])) {
                return false;
            }
        }
        // compare if value is a literal
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}

result = () => {
    // object 1
    let student1 = new Object();
    student1.rollno = defaultStudent.getRollno;
    student1.course = defaultStudent.getCourse;
    student1.duration = defaultStudent.getDuration;
    student1.startDate = defaultStudent.getStartDate;
    student1.endDate = defaultStudent.getEndDate;
    student1.garde = defaultStudent.getGarde;
    // introducing nested object
    student1.nestedObject = defaultNestedObj;

    // object 2
    let student2 = new Object();
    student2.rollno = defaultStudent.getRollno;
    student2.course = defaultStudent.getCourse;
    student2.duration = defaultStudent.getDuration;
    student2.startDate = defaultStudent.getStartDate;
    student2.endDate = defaultStudent.getEndDate;
    student2.garde = defaultStudent.getGarde;
    // introducing nested object
    student2.nestedObject = defaultNestedObj;

    console.log(defaultStudent.getStudentData);

    // equals check
    if (isEqual(student1, student2)) {
        return "The Objects are the same";
    }
    return "objects are not equal";
};
console.log(result());
