const mongoose = require('mongoose');


const connectdatabase = mongoose.connect('mongodb://127.0.0.1:27017/Filterusers')
.then(()=>{console.log("connect database")})
.catch((error)=>{console.log(error)});


module.exports = connectdatabase;