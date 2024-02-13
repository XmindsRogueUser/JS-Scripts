const express = require('express')
const lodash = require("lodash");
const empRoutes=require('./routes/employeeRoute');
const admRoutes=require('./routes/adminRoute');
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

const app = express()
const port = 3000

app.use('/employee',empRoutes);
app.use('/admin',admRoutes);

app.get('/', (req, res) => {
    var jsondata = [{ "name": 'vp', "email": "vp@gmail.com" },
    { "name": 'kp', "email": "kp@gmail.com" }];
    res.json(jsondata);
})

app.get('/static', (req, res) => {
    res.sendFile('./html/index.html', { root: __dirname })
});

app.post('/postJson', urlencodedParser, (req, res)  => {
    console.log(req.body)
    response = {  
        first_name:req.body.first_name,  
        last_name:req.body.last_name  
    };  
    console.log(response);  
    // res.end();  
    res.send(JSON.stringify(response));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log(lodash.isNumber(143))
