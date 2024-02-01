var subject = {
    name: "Maths",
    teacher: "Doe",
    id: 1,
    emailOfTeacher: "johndoe@gmail.com",
    getFullId: function () {
        return this.name + '_' + this.id
    },
    marks: {
        firstSem: 0,
        secondSem: 0
    }
};

main = () => {
    var student = new Object();
    // Attach properties and methods to student object     
    student.firstName = "Charlie";
    student["lastName"] = "Delta";
    student.age = 15;
    student.email = "charliedelta@gmail.com";
    student.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    if (subject.hasOwnProperty("marks")) {
        student.mark = subject.marks.firstSem + subject.marks.secondSem;
    }
    Object.freeze(student);
    Object.seal(student);
    // this should not work since the obj is sealed and frozen
    student.mark = 100;
    student.newField = "newData";

    return student;
}
let studentDetails = main()
console.log("Details of student " + studentDetails.getFullName() + "\n" + JSON.stringify(studentDetails));
