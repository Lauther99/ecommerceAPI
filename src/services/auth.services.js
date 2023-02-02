const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CarServices = require('./car.services')
require('dotenv').config();

const { user, car } = models

class AuthServices {
    static async register(u) {
        try {
            const result = await user.create(u);
            if (result) {
                await CarServices.createCar(result.id)
            }
            return result;
        } catch (error) {
            throw error;
        };
    };

    static async login(userCredentials) {
        try {
            const { email, stringPassword } = userCredentials
            const u = await user.findOne({ 
                where: { email },
                include: {
                    model: car,
                    as: "car",
                    attributes: {
                        exclude: ["User_id"]
                    }
                }
            })
            if (u) {
                const uPass = u.password.toString();
                const isValid = bcrypt.compareSync(stringPassword, uPass);
                delete u.dataValues.password;
                return isValid ? { isValid, u } : { isValid }
            };
            return { isValid: false };
        } catch (error) {
            throw error
        }
    }

    static genToken(userData) {
        try {
            const token = jwt.sign(userData, process.env.JWT_SECRET, {
                expiresIn: '200m',
                algorithm: 'HS512',
            });
            return token;
        } catch (error) {
            throw error
        }
    }
};

module.exports = AuthServices;