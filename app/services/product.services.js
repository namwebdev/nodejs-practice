let products = [
  {
    id: 1,
    name: "Laptop MSI",
    amount: 101,
    price: 19999999,
    sale: 999999,
  },
  {
    id: 2,
    name: "Macbook Pro",
    amount: 564,
    price: 325802348,
    sale: 2000000,
  },
  {
    id: 3,
    name: "Xiaomi Redmi 8",
    amount: 46,
    price: 5577777,
    sale: 500000,
  },
  {
    id: 4,
    name: "Logitech keyboard",
    amount: 2,
    price: 43424324,
    sale: 33333,
  },
];

const getList = () => {
  return products || [];
};

const getDetails = (id) => {
  console.log(typeof id);
  const product = products.find((p) => p.id == id);
  if (product) return product;
  else return null;
};

const create = ({ name, price, sale, amount }) => {
  const newProduct = {
    id: Math.random(),
    ...{ name, price, sale, amount },
  };
  products = [...products, newProduct];
  return newProduct;
};

const updateById = (id, { name, price, sale, amount }) => {
  const index = products.findIndex((p) => p.id == id);
  console.log(index);
  if (index !== -1) {
    products[index] = { ...products[index], ...{ name, price, sale, amount } };
    return products[index];
  } else return null;
};

const deleteById = (id) => {
  const index = products.findIndex((p) => p.id == id);
  if (index !== -1) {
    products.splice(index, 1);
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
