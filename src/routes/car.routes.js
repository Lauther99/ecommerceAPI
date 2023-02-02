const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth.middleware')

const { 
    addProduct,
    getAllProducts
} = require('../controllers/car.controller');

router.post('/addproduct/', authMiddleware, addProduct);
router.get('/showproducts/:userId', authMiddleware, getAllProducts);

module.exports = router;
