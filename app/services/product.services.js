const { Product } = require("../models/index");

const getList = async () => {
  const products = await Product.findAll();
  return products || [];
};

const getDetails = async (id) => {
  const product = await Product.findOne({ where: { id } });
  if (product) return product;
  else return null;
};

const create = async ({ name, price, sale, amount }) => {
  const newProduct = await Product.create({ name, price, sale, amount });
  return newProduct;
};

const updateById = async (id, { name, price, sale, amount }) => {
  const product = await Product.findOne({ where: { id } });
  if (product) {
    await Product.update({ name, price, sale, amount }, { where: { id } });
    return { name, price, sale, amount };
  } else return null;
};

const deleteById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  if (product) {
    await Product.destroy({
      where: { id },
    });
    return true;
  } else return false;
};

module.exports = {
  getList,
  getDetails,
  create,
  updateById,
  deleteById,
};
