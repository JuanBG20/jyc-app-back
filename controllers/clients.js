const Client = require("../models/client");

const postClients = (req, res) => {
  const newClient = new Client(req.body);

  newClient
    .save()
    .then((client) => res.status(201).json({ ok: true, client }))
    .catch((err) => console.log(err));
};

const getClients = async (req, res) => {
  const clients = await Client.aggregate([
    {
      $match: { deleted: false },
    },
    {
      $sort: { id: 1 },
    },
  ]);

  res.status(200).json({ ok: true, clients });
};

const deleteClients = async (req, res) => {
  const { id } = req.params;

  await Client.findByIdAndUpdate(id, { deleted: true });

  res.status(200).json({ ok: true, message: "Cliente eliminado con éxito" });
};

module.exports = {
  postClients,
  getClients,
  deleteClients,
};
