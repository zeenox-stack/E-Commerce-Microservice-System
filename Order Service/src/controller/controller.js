const axios = require('axios'); 


const getProductsById = async (ids) => {
    try {
        const response = await  axios.get('http://localhost:5000/products', {
            headers: { "Content-Type": "application/json" }, 
            params: { ids },
        }); 
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
};

const handleOrder = async (req, res) => {
    const { productIds } = req.body;

    try {
        if (!productIds || productIds.length === 0) throw new Error("Product ids are empty"); 

        const products = await getProductsById(productIds);

        if (products.length !== productIds.length) throw new Error("Some products are not found");

        res.cookie("orders", JSON.stringify(products), { httpOnly: true, maxAge: 8 * 60 * 60 * 1000 });
        res.status(201).json({ message: "Successfully added an order" });
    } catch (error) {
        console.error("Error occured: ", err.message); 
        res.status(error.status || 500).json({ message: err.message || "Internal server error" });
    }

}; 

module.exports = handleOrder;
