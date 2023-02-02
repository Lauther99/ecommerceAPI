const initModels = require('../models/init-models');
const db = require('../utils/db');

const models = initModels(db);

module.exports = models;