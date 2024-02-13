const bodyParser = require('body-parser');
const router = require('express').Router();
const empData = require("../my_modules/employeeDataMod");

// Create application/x-www-form-urlencoded parser  
const urlencodedParser = bodyParser.urlencoded({ extended: false })

console.log(empData);
let employee = function (id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

router.get('/list', (req, res) => {
    requestBody = req.query;
    if (requestBody.id === undefined) {
        res.send(JSON.stringify(empData.employeeData));
    } else {
        employee = empData.findById(requestBody.id);
        console.log("kk" + employee);
        if (employee === null) {
            res.send("No employee with id " + requestBody.id + " exists.");
        } else {
            res.send(JSON.stringify(employee));
        }
    }
})

router.post('/create', urlencodedParser, (req, res) => {
    requestBody = req.body;
    if (empData.findById(requestBody.id) !== null) {
        // res.writeHead(400, { "Content-Type": "text/plain" });
        res.send("An employee with id " + requestBody.id + " already exists.");
        return;
    }
    let employeeObject = new employee(
        requestBody.id,
        requestBody.firstName,
        requestBody.lastName,
        requestBody.age);
    empData.employeeData.push(employeeObject)
    res.send(JSON.stringify(employeeObject));
    console.log("Employee created");
})

router.delete('/remove', (req, res) => {
    requestBody = req.query;
    if (requestBody.id === undefined) {
        res.send("No employee id provided.");
    } else {
        employee = empData.findById(requestBody.id);
        if (employee === null) {
            res.send("No employee with id " + requestBody.id + " exists.");
        } else {
            empData.employeeData.splice(empData.employeeData.findIndex(emp => emp.id == requestBody.id), 1);
            res.send(JSON.stringify(employee));
            console.log("Employee deleted");
        }
    }
})

module.exports = router;