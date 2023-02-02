const AuthServices = require('../services/auth.services');
const  transporter  = require('../utils/mailer');

const register = async (req, res) => {
    try {
        const userInfo = req.body;
        const result = await AuthServices.register(userInfo);
        if (result) {
            await transporter.sendMail({
                from: 'lauther.harold@gmail.com',
                to: result.email,
                subject: 'Bienvenido a tu tienda favorita',
                text: 'Hola!',
                html: '<h1>Welcome</h1>'
            });

            res.status(201).json({ message: 'User created successfully' });
        } else {
            res.status(400).json({ message: 'Something went wrong' });
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const stringPassword = password.toString();
        const result = await AuthServices.login({ email, stringPassword });
        if (result.isValid) {
            const { username, id, email } = result.u;
            const userData = { username, id, email };
            const token = AuthServices.genToken(userData);
            result.u.dataValues.token = token;
            res.json(result);
        } else {
            res.status(400).json({ message: 'User not found' })
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { register, login };