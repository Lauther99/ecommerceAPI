const ProductServices = require('../services/product.services');

const createProduct = async (req, res) => {
    try {
        const data = req.body
        const result = await ProductServices.create(data)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getAllProducts = async (req, res) => {
    try {
        const result = await ProductServices.getAllProducts()
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json(error.message)

    }
}

const updateProductImage = async (req, res) => {
    try {
        const p = req.body
        const result = await ProductServices.updateProductImage(p)
        
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)

    }
}

module.exports = {
    createProduct,
    getAllProducts,
    updateProductImage
};