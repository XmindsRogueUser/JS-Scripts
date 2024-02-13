const router = require('express').Router();

router.get('/list',(req,res)=>{
    res.send('admins are listed');
})

module.exports=router;