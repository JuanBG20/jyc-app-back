const router = require("express").Router();
const clientController = require("../controllers/clients");

router.post("/", clientController.postClients);
router.get("/", clientController.getClients);
router.delete("/:id", clientController.deleteClients);

module.exports = router;
