const DataTypes = require("sequelize").DataTypes;
const _car = require("./car");
const _order = require("./order");
const _product = require("./product");
const _productincart = require("./productincart");
const _productinorder = require("./productinorder");
const _user = require("./user");

function initModels(sequelize) {
  const car = _car(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const productincart = _productincart(sequelize, DataTypes);
  const productinorder = _productinorder(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);

  productincart.belongsTo(car, { as: "Car", foreignKey: "Car_id"});
  car.hasMany(productincart, { as: "productincarts", foreignKey: "Car_id"});
  productinorder.belongsTo(order, { as: "Order", foreignKey: "Order_id"});
  order.hasMany(productinorder, { as: "productinorders", foreignKey: "Order_id"});
  productincart.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(productincart, { as: "productincarts", foreignKey: "Product_id"});
  productinorder.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(productinorder, { as: "productinorders", foreignKey: "Product_id"});
  car.belongsTo(user, { as: "User", foreignKey: "User_id"});
  user.hasOne(car, { as: "car", foreignKey: "User_id"});
  order.belongsTo(user, { as: "User", foreignKey: "User_id"});
  user.hasMany(order, { as: "orders", foreignKey: "User_id"});
  product.belongsTo(user, { as: "User", foreignKey: "User_id"});
  user.hasMany(product, { as: "products", foreignKey: "User_id"});

  return {
    car,
    order,
    product,
    productincart,
    productinorder,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
