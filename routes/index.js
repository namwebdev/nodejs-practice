const express = require("express");
const { register, login } = require("../controllers/auth.controllers");
const { stationRouter } = require("./station.routes");
const { tripRouter } = require("./trip.routes");

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => res.send("API Version 1"));

// auth route
rootRouter.post("/register", register);
rootRouter.post("/login", login);
//

rootRouter.use("/stations", stationRouter);
rootRouter.use("/trips", tripRouter);

module.exports = { rootRouter };
