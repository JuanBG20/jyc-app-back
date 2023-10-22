const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: Number,
    id: { type: Number, required: true },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
