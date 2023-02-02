const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth.middleware')

const { 
    createProduct,
    getAllProducts,
    updateProductImage
} = require('../controllers/products.controller');

router.get('/getproducts', getAllProducts);
router.post('/newproduct', authMiddleware, createProduct);
router.post('/updateimage', authMiddleware, updateProductImage);


module.exports = router;
