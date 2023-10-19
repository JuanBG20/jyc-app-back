const mongoose = require("mongoose");

const movementSchema = mongoose.Schema(
  {
    product: { type: String, required: true },
    price: { type: Number, required: true },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Movement = mongoose.model("Movement", movementSchema);

module.exports = Movement;
