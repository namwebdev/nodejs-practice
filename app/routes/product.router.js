const express = require("express");
const {
  getListProduct,
  getProductDetails,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers");
const {
  checkEmpty,
  checkValidName,
  checkValidAmount,
  checkValidSale,
} = require("../middlewares/validations/product.validation");
const productRouter = express.Router();

productRouter.get("/", getListProduct);

productRouter.get("/:id", getProductDetails);

productRouter.post(
  "/",
  checkEmpty,
  checkValidName,
  checkValidAmount,
  checkValidSale,
  createProduct
);

productRouter.put(
  "/:id",
  checkEmpty,
  checkValidName,
  checkValidAmount,
  checkValidSale,
  updateProduct
);

productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
