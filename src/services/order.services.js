const models = require('../models');
const { orders, productinorder } = models

class OrderServices {
    static async newOrder(id) {
        try {
            const result = await orders.create({
                User_id: id
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async addProductInOrder(newOrder, p) {
        try {
            const orderId = newOrder.id;
            const { Product_id, price, quantity } = p
            const result = await productinorder.create({
                quantity, price, Product_id, Order_id: orderId
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getAllOrders(userId) {
        try {
            const result = await orders.findAll({
                where: {
                    User_id: userId
                },
                include: {
                    model: productinorder,
                    as: "productinorders",
                    attributes: {
                        exclude: ["id", "Order_id"]
                    }
                }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getOneOrder(orderId){
        try {
            const or = await orders.findOne({
                where: {
                    id: orderId
                }
            })
            return or;
        } catch (error) {
            throw new Error
        }
    }

    static async purchase(orderId){
        try {
            const result = await orders.update({
                status: "PURCHASED"
            },
            {
                where: {
                    id: orderId
                }
            })
            return result[0]
        } catch (error) {
            throw error
            
        }
    }
};



module.exports = OrderServices;