const fs = require("fs");

const getProducts = () => {
  const buffer = fs.readFileSync("db.json");
  const products = JSON.parse(buffer.toString());
  return products;
};

const getProductDetails = (id) => {
  const products = getProducts();
  const product = products.find((p) => p.id === id);
  if (product) return product;
  else return null;
};

const createProduct = (title, description, price, amount) => {
  const newProducts = {
    id: Math.floor(Math.random() * 100),
    title,
    description,
    price,
    amount,
  };
  let products = getProducts();
  products = [...products, newProducts];
  fs.writeFileSync("db.json", JSON.stringify(products));
  return newProducts;
};

const upadteProduct = (id, title, description, price, amount) => {
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], title, description, price, amount };
    fs.writeFileSync("db.json", JSON.stringify(products));
    return products[index];
  } else return null;
};

const deleteProduct = (id) => {
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    fs.writeFileSync("db.json", JSON.stringify(products));
    return true;
  } else return null;
};

const addProductAmount = (id) => {
  const productQuantityToAdd = 50;
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index].amount += productQuantityToAdd;
    fs.writeFileSync("db.json", JSON.stringify(products));
    return products[index];
  } else return null;
};

module.exports = {
  getProducts,
  getProductDetails,
  createProduct,
  upadteProduct,
  deleteProduct,
  addProductAmount
};
