const express = require('express'); 
const router = express.Router(); 
const controller = require('../controller/controller');

router.get('/', (req, res) => {
    const { orders } = req.cookies;

    try {
        if (!orders || orders.length === 0) throw new Error("ID is empty or invalid"); 

        res.status(200).json(JSON.parse(orders));
    } catch (err) {
        console.error("Error occured: ", err.message); 
        res.status(err.status || 500).json({ message: err.message });
    }
}); 

router.post('/add', controller.handleOrder);

module.exports = router;