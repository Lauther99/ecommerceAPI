const nodemailer = require('nodemailer');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
        user: 'lautherharold27@gmail.com',
        pass: process.env.GOOGLE_KEY_APPLICATION,
    }
});

module.exports = transporter;
