const models = require('../models');
const { car, productincart, product} = models

class CarServices {
    static async createCar(userId) {
        try {
            const result = await car.create({
                User_id: userId,
            })
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll(id) {
        try {
            const result = await car.findOne({
                where: {
                    User_id: id
                },
                include: {
                    model: productincart,
                    as: "productincarts",
                    attributes: ["Product_id", "price", "quantity"]
                },
                attributes: ["id", "totalPrice"]
                
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async addProduct(data) {
        try {
            const { carId, productId, quantity, price} = data
            const result = await productincart.create({
                Car_id: carId,
                Product_id: productId,
                quantity,
                price
            })

            const total = quantity * price;
            this.updateCar(carId, total);

            return result;
        } catch (error) {
            throw error;
        }
    }
    
    static async updateTotal(id, total) {
        try {
            await car.update({
                totalPrice: total
            },{
                where: {
                    id
                }
            }
            )
        } catch (error) {
            throw error
        }
    }

    static async updateCar(id, total){
        try {
            const actual = await car.findOne({
                where: {
                    id
                },
                attributes: [ "totalPrice"]
            })
            total = actual.totalPrice + total
            this.updateTotal(id, total);
        } catch (error) {
            throw error
        }
    }

    static async clearCar(id){
        try {
            await productincart.destroy({
                where: {
                    Car_id: id
                }
            })
            this.updateTotal(id, 0);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CarServices;