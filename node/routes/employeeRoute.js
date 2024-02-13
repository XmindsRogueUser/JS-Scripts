const router = require('express').Router();

router.get('/list',(req,res)=>{
    res.send('employees are listed');
})
module.exports=router;