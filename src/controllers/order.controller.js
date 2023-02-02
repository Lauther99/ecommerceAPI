const OrderServices = require('../services/order.services');
const CarServices = require('../services/car.services');
const ProductServices = require('../services/product.services');
const  transporter  = require('../utils/mailer');

const createOrder = async (req, res) => {
    try {
        const {userId, productincarts} = req.body
        if (productincarts.length === 0) {
            return res.json({ message: "No products in car" })
        }
        const newOrder = await OrderServices.newOrder(userId);
        productincarts.forEach(async (p) => {
            await OrderServices.addProductInOrder(newOrder, p);
        })
        await CarServices.clearCar(req.body.carId)

        res.status(200).json(newOrder);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getOrders = async (req, res) => {
    try {
        const { userId } = req.params
        const result = await OrderServices.getAllOrders(userId)
        res.status(200).json(result);

    } catch (error) {

    }
}

const purchaseOrder = async (req, res) => {
    try {
        const {email, orderId, productinorders} = req.body
        const result = await OrderServices.purchase(orderId)

        if (result === 1) {
            productinorders.forEach( async (p) => {
                await ProductServices.updateProducts(p)
            })
            await transporter.sendMail({
                from: 'lauther.harold@gmail.com',
                to: email,
                subject: `Revisa tu compra ${orderId}`,
                text: 'Gracias por tu compra :D',
                html: '<h1>Welcome</h1>'
            });
            res.status(201).json({message: "Purchased successfully"})

        } else {
            res.status(400).json({ message: 'Something went wrong' });
        }

        
    } catch (error) {
        res.status(400).json(error.message)
        
    }
}

module.exports = {
    createOrder,
    getOrders,
    purchaseOrder
};