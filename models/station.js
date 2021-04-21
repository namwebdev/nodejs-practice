"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        charset: "utf8",
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        charset: "utf8",
      },
      province: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Station",
    }
  );
  return Station;
};
