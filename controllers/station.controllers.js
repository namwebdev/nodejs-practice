const { Station } = require("../models/index");

const getAllStation = async (req, res) => {
  try {
    const stations = await Station.findAll();
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

const deleteStation = async (req, res) => {
  const { id } = req.params;
  try {
    await Station.destroy({ where: { id } });
    res.status(200).json({ message: "Delete Station successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { getAllStation, createStation, deleteStation };
