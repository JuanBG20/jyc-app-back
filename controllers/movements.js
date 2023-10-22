const Movement = require("../models/movement");

const postMovements = (req, res) => {
  const { product_code } = req.params;
  const { type, amount, quantity, client_id } = req.body;

  const newMovement = new Movement({
    type,
    amount,
    quantity: type === "Compra" ? quantity : quantity * -1,
    client_id,
    product_code,
  });

  newMovement
    .save()
    .then((movement) => {
      res.status(201).json({ ok: true, movement });
    })
    .catch((err) => console.log(err));
};

const getMovements = async (req, res) => {
  const movements = await Movement.aggregate([
    {
      $match: { deleted: false },
    },
    {
      $sort: { _id: -1 },
    },
  ]);

  res.status(200).json({ ok: true, movements });
};

const deleteMovements = async (req, res) => {
  const { id } = req.params;

  await Movement.findByIdAndUpdate(id, { deleted: true });

  res.status(200).json({ ok: true, message: "Movimiento eliminado con éxito" });
};

module.exports = {
  postMovements,
  getMovements,
  deleteMovements,
};
