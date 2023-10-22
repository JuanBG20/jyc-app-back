const router = require("express").Router();
const productRoutes = require("./products.routes");
const clientRoutes = require("./clients.routes");
const movementRoutes = require("./movements.routes");

router.use("/products", productRoutes);
router.use("/clients", clientRoutes);
router.use("/movements", movementRoutes);

module.exports = router;
