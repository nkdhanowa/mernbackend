const express = require('express');
const app = express();
const cors = require('cors');
require('./db/conn.js');
const Router = require('./routes/router.js');
app.use('uploads',express.static('./uploads'))
app.use(cors());
app.use(Router);
app.use(express.json());

app.listen('8000',()=>{console.log('server start ')})