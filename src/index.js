const yargs = require("yargs");
const chalk = require("chalk");
const {
  getProducts,
  getProductDetails,
  createProduct,
  upadteProduct,
  deleteProduct,
  addProductAmount,
} = require("./model/product");

yargs.command({
  command: "get",
  handler: () => {
    const products = getProducts();
    if (products) console.log(products);
    else console.log(chalk.red("Error"));
  },
});

yargs.command({
  command: "get-details",
  handler: (args) => {
    const { id } = args;
    const res = getProductDetails(id);
    if (res) console.log(res);
    else console.log(chalk.red("Get Product Details failed"));
  },
});

yargs.command({
  command: "create",
  builder: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  handler: (args) => {
    const { title, description, price, amount } = args;
    const res = createProduct(title, description, price, amount);
    if (res) console.log(chalk.green("Create Product successfully:\n"), res);
    else console.log(chalk.red("Create Product failed"));
  },
});

yargs.command({
  command: "update",
  builder: {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  handler: (args) => {
    const { id, title, description, price, amount } = args;
    const res = upadteProduct(id, title, description, price, amount);
    if (res) console.log(chalk.green("Update Product successfully:\n"), res);
    else console.log(chalk.red("Create Product failed"));
  },
});

yargs.command({
  command: "delete",
  handler: (args) => {
    const { id } = args;
    const res = deleteProduct(id);
    if (res) console.log(chalk.green("Delete Product successfully"));
    else console.log(chalk.red("Delete Product successfully failed"));
  },
});

yargs.command({
  command: "add-quantity",
  builder: {
    id: {
      type: Number,
    },
  },
  handler: (args) => {
    const { id } = args;
    const res = addProductAmount(id);
    if (res) console.log(chalk.green("Product is added"), res);
    else console.log(chalk.red("Product add failed"));
  },
});

yargs.parse();
