const { Op } = require("sequelize");
const { Station } = require("../models/index");

const getAllStation = async (req, res) => {
  const { name } = req.query;
  try {
    const stations = name
      ? await Station.findAll({
          where: { name: { [Op.like]: `%${name}%` } },
        })
      : await Station.findAll();
    res.status(200).json({ data: stations || [] });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const createStation = async (req, res) => {
  try {
    const { name, address, province } = req.body;
    const newStation = await Station.create({ name, address, province });
    res.status(201).json({
      data: newStation,
      message: "Create Station successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const updateStation = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    const station = await Station.findOne({ where: { id } });
    if (station) {
      await Station.update({ name, address, province }, { where: { id } });
      res.status(200).json({
        message: "Updated Station successfully",
        data: { id, name, address, province },
      });
    } else res.status(404).json({ message: "Station not found" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    await Station.destroy({ where: { id } });
    res.status(200).json({ message: "Delete Station successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { getAllStation, createStation, updateStation, deleteStation };
