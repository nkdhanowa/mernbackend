const mongoose = require('mongoose');
var validator = require('validator');


  const userSchema = mongoose.Schema({

    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            { throw Error('This is not valid Email')}
        }
    },
    phone:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
  });


  const user = new mongoose.model('user',userSchema);



  module.exports = user;