const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const app = express();
app.set("view engine", 'ejs');
dotenv.config();

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})