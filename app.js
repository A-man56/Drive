const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const userModel = require('./models/userModels');

const app = express();
app.set("view engine", 'ejs');

const userRouters= require('./router/userRoutes');
const connectionDb = require('./config/db');
connectionDb();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/user', userRouters);

dotenv.config();

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})