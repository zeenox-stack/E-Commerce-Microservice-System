const express = require('express'); 
const cors = require('cors');

const router = require('./router/router');

const app = express(); 

app.use(cors()); 
app.use(cors()); 

app.use('/products', router); 

module.exports = app;