const express = require('express');
const Routes = new express.Router();
const usercontroller  = require('../controllers/usercontroller.js');
const upload = require('../multer/storageconfig.js');
const {userpost,allusers,getsingleuser,userdelfun}= usercontroller;

Routes.post('/user/register',upload.single('image'),userpost);
Routes.get('/user/details',allusers);
Routes.get('/user/singledetails/:id',getsingleuser);
Routes.delete('/user/delete/:id',userdelfun);

module.exports = Routes;