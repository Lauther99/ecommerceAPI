const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    apis: [
        "./src/documentation/routes/docAuthRoutes.js",
        "./src/documentation/routes/docProductsRoutes.js",
        "./src/documentation/routes/docCarRoutes.js",    
        "./src/documentation/routes/docOrderRoutes.js",    
        "./src/documentation/schemas/authSchemas.js",
        "./src/documentation/schemas/productsSchemas.js",
        "./src/documentation/schemas/carSchemas.js",
        "./src/documentation/schemas/orderSchemas.js"
    ],
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce API",
            version: "0.0.9",
            description: "API para una aplicación de ecommerce" //aqui se pone lo que quieras
        },
    },
};

const swaggerSpec = swaggerJSDoc(options);
const swaggerDocs = (app, port) => {
    //generar la ruta donde se mostrará la documentación
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader({ "Content-Type": "application/json" });
        res.send(swaggerSpec);
    });

    console.log(`La documentación está disponible en ${process.env.URL}:${port}/api/v1/docs`);
}

module.exports = swaggerDocs;