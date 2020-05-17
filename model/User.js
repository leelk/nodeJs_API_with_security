const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        min:2,
        max:255
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:2
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('User',userSchema);