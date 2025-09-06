const express = require('express');
const router=express.Router();
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');



const { body,validationResult } = require('express-validator');
router.get('/register', (req,res) =>{
    res.render('register');
})
router.post('/register',
    body('username').trim().isLength({min:3}),
    body('email').trim().isEmail().isLength({min:9}),
    body('password').trim().isLength({min:5}),
    async (req,res)=>{
        const error = validationResult(req);
        // console.log(error);
        if(error.isEmpty()){
            res.status(200).json({
                message:"registered successfully!!!"
            })
        
        }else{
            return res.status(400).json({
                error:error.array(),
                message:"invalid values"
            })
        }
        const {username,email,password} = req.body;
        const hashpaswoerd = await bcrypt.hash(password,10);
        const user = await userModel.create({
            username,
            email,
            password: hashpaswoerd
        })
        res.json(user)
        // res.status(201).json({
        //     message:"User created successfully",
        //     user
        // })
        console.log(req.body);
})
module.exports = router;