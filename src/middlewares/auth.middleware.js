const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    let { authorization: token } = req.headers;
    if (token) {
        token = token.replace("Bearer ", "");
        jwt.verify(
            token,
            process.env.JWT_SECRET,
            { algorithms: "HS512" },
            (err, decoded) => {
                if (err) {
                    res.status(400).json({
                        error: "Invalid token",
                        message: "El token no es válido o ya expiro, envía un token correcto",
                    });
                } else {
                    next();
                }
            }
        );        
    } else {
        res.status(400).json({
            error: "Missing token"
        });
    }
};

module.exports = authMiddleware;