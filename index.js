const express = require("express");
const cors = require("cors");

const router = require("./app/routes/root.router");
const { sequelize } = require("./app/models/index");

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Sever running at http://localhost:${port}/`);
});

app.use(cors());

app.use(express.json());
app.use(router);

sequelize.sync({ alter: true });
