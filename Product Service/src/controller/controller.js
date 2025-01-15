const axios = require('axios');

const getProductsById = async (id) => {
try {
const response = await axios.get(`https://fakestore.com/products/${id}`);

return response.data;
} catch (err) {
    console.error("Error occured: ", err.message)
}
};

const handleProducts = async (req, res) => {
    const { id } = req.body;
    const products = [];
    try {
        id.forEach(async (product) => {
            const response = await getProductsById(product);;
            products.push(response);
        }); 

        res.status(200).json({ products });
    } catch (err) {
        console.error("Error: ", err.message); 
        res.status(err.status || 500).json({ messsage: err.message || "Internal server error" });
    }
};

module.exports = handleProducts;