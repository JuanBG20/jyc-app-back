const Client = require("../models/client");

const postClients = (req, res) => {
  res.send("POST");
};

const getClients = (req, res) => {
  res.send("GET");
};

const deleteClients = (req, res) => {
  res.send("DELETE");
};

module.exports = {
  postClients,
  getClients,
  deleteClients,
};
