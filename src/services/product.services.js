const models = require('../models');
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { user, product } = models

class ProductServices {
    static async create(data) {
        try {
            const result = await product.create(data);
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async getAllProducts() {
        try {
            const result = await product.findAll({
                where: {
                    available_qty: {
                        [Op.gt]: 0
                    }
                },
                include: {
                    model: user,
                    as: "User",
                    attributes: {
                        exclude: ["password"]
                    }
                },
                attributes: {
                    exclude: ["User_id"]
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getOneProduct(id) {
        try {
            const p = await product.findOne({
                where: { id }
            })
            return p;
        } catch (error) {
            throw error;
        }
    }

    static async updateProducts(p) {
        try {
            const { quantity, Product_id } = p
            const { available_qty } = await this.getOneProduct(Product_id)

            await product.update({
                available_qty: available_qty - quantity
            },
            {
                where: {
                    id: Product_id
                }
            })
            
        } catch (error) {
            throw error;

        }
    }

    static async updateProductImage(p) {
        try {
            const { productId, imgPath } = p
            const result = await product.update({
                product_image: imgPath
            },
            {
                where: {
                    id: productId
                }
            })
            return result? "Successfully updated" : "Error updating product"
        } catch (error) {
            throw error;

        }
    }
};

module.exports = ProductServices;