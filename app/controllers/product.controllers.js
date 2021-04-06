const {
  getList,
  getDetails,
  create,
  updateById,
  deleteById,
} = require("../services/product.services");

const getListProduct = async (req, res) => {
  const products = await getList();
  res.status(200).send(products);
};

const getProductDetails = async (req, res) => {
  const { id } = req.params;
  const product = await getDetails(id);
  if (product) res.status(200).send(product);
  else res.status(404).send("Not found");
};

const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = await create(product);
  res.status(201).json({
    message: "Create Product successfully",
    data: newProduct,
  });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const productUpdated = await updateById(id, product);
  if (productUpdated)
    res
      .status(200)
      .json({ message: "Update Product successfully", data: productUpdated });
  else res.status(404).send("Product not found");
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const status = await deleteById(id);
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
