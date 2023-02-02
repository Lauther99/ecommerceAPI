const authRoutes = require('./auth.routes');
const productRoutes = require('./products.routes')
const carRoutes = require('./car.routes')
const orderRoutes = require('./order.routes')

const routerApi = (app) => {
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/products', productRoutes);
    app.use('/api/v1/car', carRoutes);
    app.use('/api/v1/order', orderRoutes);
}

module.exports = routerApi;