'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.user,{
        through: models.Cart,
        foreignKey: "ProductID",
      })
    }
  }
  Product.init({
    ProductID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: DataTypes.STRING,
    Price: DataTypes.INTEGER,
    Category: DataTypes.STRING,
    Sold: DataTypes.INTEGER,
    Info: DataTypes.STRING,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};