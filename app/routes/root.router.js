const express = require("express");
const productRouter = require("./product.router");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/products", productRouter);

router.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

router.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = router;
