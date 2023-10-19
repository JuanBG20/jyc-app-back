const Movement = require("../models/client");

const postMovements = (req, res) => {
  res.send("POST");
};

const getMovements = (req, res) => {
  res.send("GET");
};

const deleteMovements = (req, res) => {
  res.send("DELETE");
};

module.exports = {
  postMovements,
  getMovements,
  deleteMovements,
};
