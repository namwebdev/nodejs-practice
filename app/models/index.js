const { Sequelize } = require("sequelize");
const { DB, HOST, USER, PASSWORD, dialect } = require("../../config/db.config");
const { createProductModel } = require("./product.model");
const mysql2 = require("mysql2");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
  dialectModule: mysql2,
});

const Product = createProductModel(sequelize);

module.exports = {
  sequelize,
  Product,
};
