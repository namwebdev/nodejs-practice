const express = require("express");
const request = require("async-request");
const path = require("path");

const app = express();
const port = 3000;

const pathPublic = path.join(__dirname, "./public");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(express.static(pathPublic));
app.set("view engine", "hbs");

const getCoordinate = async (location) => {
  const token =
    "pk.eyJ1Ijoienlua3kxMjMiLCJhIjoiY2tteW51dW55MDVzZTJ2cjQxMWJ5a3JveSJ9.9n25mcsNgQXHGnQEgsNm8Q";

  const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${token}`;

  const res = await request(apiUrl);
  const data = JSON.parse(res.body);
  return data.features;
};

app.get("/", async (req, res) => {
  const { location } = req.query;
  if (location) {
    const data = await getCoordinate(location);
    if (data.length)
      res.render("index", {
        status: true,
        data,
      });
    else
      res.render("index", {
        status: true,
        isEmpty: true,
      });
  } else
    res.render("index", {
      status: false,
    });
});
