// 1.Create a module to define the following array
// const employeeData = [
// 	{
//   	id: 1,
//   	firstName: "Davaraj",
//   	lastName: "PD",
//   	age: "18",
// 	},
// 	{
//   	id: 2,
//   	firstName: "Shivaraj",
//   	lastName: "T",
//   	age: "17",
// 	}
//   ];

// Define api methods to display all employee data
// Add new data into the array
// Display particular employees data
// Remove data of a particular employee.(Using express.Router and java script array methods)

const express = require('express')
const dataOperator = require('./routes/dataOperator');

const app = express()
const port = 3000

app.use('/employee', dataOperator);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
