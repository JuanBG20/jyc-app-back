const mongoose = require("mongoose");

const movementSchema = mongoose.Schema(
  {
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    quantity: Number,
    client_id: { type: Number, ref: "Clients" },
    product_code: { type: Number, ref: "Products" },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Movement = mongoose.model("Movement", movementSchema);

module.exports = Movement;
