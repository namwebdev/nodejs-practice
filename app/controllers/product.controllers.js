const {
  getList,
  getDetails,
  create,
  updateById,
  deleteById,
} = require("../services/product.services");

const getListProduct = (req, res) => {
  const products = getList();
  res.status(200).send(products);
};

const getProductDetails = (req, res) => {
  const { id } = req.params;
  const product = getDetails(id);
  if (product) res.status(200).send(product);
  else res.status(404).send("Not found");
};

const createProduct = (req, res) => {
  const product = req.body;
  const newProduct = create(product);
  res.status(201).json({
    message: "Create Product successfully",
    data: newProduct,
  });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const productUpdate = updateById(id, product);
  if (productUpdate)
    res
      .status(200)
      .json({ message: "Update Product successfully", data: productUpdate });
  else res.status(404).send("Product not found");
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const status = deleteById(id);
  if (status) res.status(200).send("Delete Product successfully");
  else res.status(404).send("Product not found");
};

module.exports = {
  getListProduct,
  getProductDetails,
  createProduct,
  updateProduct,
  deleteProduct,
};
