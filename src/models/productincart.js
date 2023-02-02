const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return productincart.init(sequelize, DataTypes);
}

class productincart extends Sequelize.Model {
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
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'car',
        key: 'id'
      }
    },
    Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'productincart',
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
        name: "fk_ProductInCart_Car1_idx",
        using: "BTREE",
        fields: [
          { name: "Car_id" },
        ]
      },
      {
        name: "fk_ProductInCart_Product1_idx",
        using: "BTREE",
        fields: [
          { name: "Product_id" },
        ]
      },
    ]
  });
  }
}
