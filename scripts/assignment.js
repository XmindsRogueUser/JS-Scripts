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


class Student {
    constructor(rollno, course, duration, startDate, endDate, garde) {
        this.rollno = rollno;
        this.course = course;
        this.duration = duration;
        this.startDate = startDate;
        this.endDate = endDate;
        this.garde = garde;
    }

    getStudentData() {
        console.log(Object.entries(this));
    }
}

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
    set setRollno(rollno) { return this.rollno = rollno },
    set setCourse(course) { return this.course = course },
    set setDuration(duration) { return this.duration = duration },
    set setStartDate(startDate) { return this.startDate = startDate },
    set setEndDate(endDate) { return this.endDate = endDate },
    set setGarde(garde) { return this.garde = garde }
};

setStudentData = (
    rollno,
    course,
    duration,
    startDate,
    endDate,
    garde
) =>
    new Student(rollno, course, duration, startDate, endDate, garde);

function isEqual(object1, object2) {
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) {
        return false;
    }

    for (let key of objKeys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

result = () => {
    student1 = setStudentData(
        defaultStudent.getRollno,
        defaultStudent.getCourse,
        defaultStudent.getDuration,
        defaultStudent.getStartDate,
        defaultStudent.getEndDate,
        defaultStudent.getGarde
    );

    student2 = setStudentData(
        defaultStudent.getRollno,
        defaultStudent.getCourse,
        defaultStudent.getDuration,
        defaultStudent.getStartDate,
        defaultStudent.getEndDate,
        defaultStudent.getGarde
    );
    student1.getStudentData();
    student2.getStudentData();

    if (isEqual(student1, student2)) {
        return "The Objects are the same";
    }
    return "objects are not equal";
};
console.log(result());
