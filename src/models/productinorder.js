const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return productinorder.init(sequelize, DataTypes);
}

class productinorder extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    Order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'productinorder',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_ProductInOrder_Product1_idx",
        using: "BTREE",
        fields: [
          { name: "Product_id" },
        ]
      },
      {
        name: "fk_ProductInOrder_Order1_idx",
        using: "BTREE",
        fields: [
          { name: "Order_id" },
        ]
      },
    ]
  });
  }
}
