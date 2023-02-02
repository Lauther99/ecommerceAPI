const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middlewares/auth.middleware')

const { 
    createOrder,
    getOrders,
    purchaseOrder
} = require('../controllers/order.controller');

router.post('/createorder', authMiddleware, createOrder);
router.get('/getorders/:userId', authMiddleware, getOrders);
router.post('/purchase', authMiddleware, purchaseOrder);


module.exports = router;
