const router = require("express").Router();
const productController = require("../controllers/products");

router.post("/", productController.postProducts);
router.get("/", productController.getProducts);
router.delete("/:id", productController.deleteProducts);

module.exports = router;
