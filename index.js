const express = require("express");

const router = require("./app/routes/root.router");
const { sequelize } = require("./app/models/index");

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Sever running at http://localhost:${port}/`);
});

app.use(express.json());
app.use(router);

sequelize.sync({ alter: true });
