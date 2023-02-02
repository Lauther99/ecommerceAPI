const CarServices = require('../services/car.services');

const addProduct = async (req, res) => {
    try {
        const data = req.body;
        await CarServices.addProduct(data);
        res.status(200).json({message: "Added successfully"})
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getAllProducts = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await CarServices.getAll(userId);
        
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    addProduct,
    getAllProducts
};