const mongoose = require('mongoose');
const userSchema = new mongoose.schema({
    username:String,
    email:String,
    password:String,
    // createdAt:{
})
const userModel =mongoose.model('user',userSchema);
module.exports = userModel;