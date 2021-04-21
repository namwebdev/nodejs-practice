const express = require("express");
const {
  getAllStation,
  createStation,
  deleteStation,
} = require("../controllers/station.controllers");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const stationRouter = express.Router();

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const rolesHavePermission = [
  config.user_type.ADMIN,
  config.user_type.SUPER_ADMIN,
];

stationRouter.get("/", getAllStation);
stationRouter.post(
  "/",
  authenticate,
  authorize(rolesHavePermission),
  createStation
);
stationRouter.delete(
  "/:id",
  authenticate,
  authorize(rolesHavePermission),
  deleteStation
);

module.exports = { stationRouter };
