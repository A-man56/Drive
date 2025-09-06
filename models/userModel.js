const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:[3, 'Username must be at least 3 characters long']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:[3, 'Email must be at least 3 characters long']
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[5, 'Password must be at least 5 characters long']
    },
    // createdAt:{
})
const userModel =mongoose.model('user',userSchema);
module.exports = userModel;