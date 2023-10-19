const router = require("express").Router();
const movementController = require("../controllers/movements");

router.post("/", movementController.postMovements);
router.get("/", movementController.getMovements);
router.delete("/:id", movementController.deleteMovements);

module.exports = router;
