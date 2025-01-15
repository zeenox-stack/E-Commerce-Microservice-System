const express = require('express'); 
const router = express.Router(); 

const controller = require('../controller/controller'); 

router.get('/', controller.handleProducts);

module.exports = router;