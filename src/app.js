const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routerApi = require('./routes/index')


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

routerApi(app);

module.exports = app;

