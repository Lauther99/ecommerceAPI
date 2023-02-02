const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return user.init(sequelize, DataTypes);
}

class user extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      password: {
        type: DataTypes.BLOB,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(450),
        allowNull: false,
        unique: "email_UNIQUE"
      }
    }, {
      sequelize,
      hooks: {
        beforeCreate: (user, options) => {
          const { password } = user;
          const hash = bcrypt.hashSync(password, 10);
          user.password = hash;
        }
      },
      tableName: 'user',
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
          name: "email_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "email" },
          ]
        },
      ]
    });
  }
}
