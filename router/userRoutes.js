const express = require('express');
const router=express.Router();
const { body,validationResult } = require('express-validator');

router.get('/register', (req,res) =>{
    res.render('register');
})
router.post('/register',
    body('username').trim().isLength({min:3}),
    body('email').trim().isEmail().isLength({min:9}),
    body('password').trim().isLength({min:5}),
    (req,res)=>{
        const error = validationResult(req);
        // console.log(error);
        if(error.isEmpty()){
            res.status(200).json({
                message:"valid data"
            })
        
        }else{
            return res.status(400).json({
                error:error.array(),
                message:"invalid values"
            })
        }
    
    // console.log(req.body);
})
module.exports = router;