const { Sequelize } = require("sequelize");
const { DB, HOST, USER, PASSWORD, dialect } = require("../../config/db.config");
const { createProductModel } = require("./product.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
});

const Product = createProductModel(sequelize);

module.exports = {
  sequelize,
  Product,
};
