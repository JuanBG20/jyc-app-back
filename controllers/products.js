const Product = require("../models/product");

const postProducts = (req, res) => {
  res.send("POST");
};

const getProducts = (req, res) => {
  res.send("GET");
};

const deleteProducts = (req, res) => {
  res.send("DELETE");
};

module.exports = {
  postProducts,
  getProducts,
  deleteProducts,
};
