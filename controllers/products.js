const Product = require("../models/product");

const postProducts = (req, res) => {
  const newProduct = new Product(req.body);

  newProduct
    .save()
    .then((product) => res.status(201).json({ ok: true, product }))
    .catch((err) => console.log(err));
};

const getProducts = async (req, res) => {
  const products = await Product.aggregate([
    {
      $match: { deleted: false },
    },
    {
      $sort: { _id: -1 },
    },
  ]);

  res.status(200).json({ ok: true, products });
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndUpdate(id, { deleted: true });

  res.status(200).json({ ok: true, message: "Producto eliminado con éxito" });
};

module.exports = {
  postProducts,
  getProducts,
  deleteProducts,
};
