const Gang = require("../models/gangsModel");

const getAllGangs = async (req, res) => {
  try {
    const gangs = await Gang.find();

    res.status(200).json({
      status: "success",
      data: {
        gangs,
      },
      message: "Got all current gangs",
    });
  } catch (err) {
    res.status(404).json({
      staus: "failed",
      message: err,
    });
  }
};
const getGang = async (req, res) => {
  try {
    const foundGang = await Gang.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: foundGang,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
const createGang = async (req, res) => {
  try {
    const newGang = await Gang.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        gang: newGang,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const updateGang = async (req, res) => {
  try {
    const foundGang = await Gang.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: foundGang,
      message: "gang updated",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
const deleteGang = async (req, res) => {
  try {
    const foundGang = await Gang.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: `${foundGang} deleted`,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

module.exports = {
  getAllGangs,
  getGang,
  createGang,
  updateGang,
  deleteGang,
};
