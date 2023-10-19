const router = require("express").Router();
const productRoutes = require("./products.routes");

router.use("/products", productRoutes);
router.use("/clients", productRoutes);
router.use("/movements", productRoutes);

module.exports = router;
