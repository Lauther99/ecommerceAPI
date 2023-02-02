const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./routes/index')
const app = express();

const db = require('./utils/db')
const initModels = require('./models/init-models')

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

db.authenticate()
    .then(() => console.log("Autenticación exitosa"))
    .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
    .then(() => console.log("Base de datos sincronizada"))
    .catch((error) => console.log(error));


routerApi(app);

module.exports = app;

