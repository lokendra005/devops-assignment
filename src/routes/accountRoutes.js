const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.post("/", accountController.registerNewAccount);
router.get("/", accountController.retrieveAllAccounts);
router.get("/:id", accountController.getAccountById);
router.put("/:id", accountController.patchAccountDetails);
router.delete("/:id", accountController.deleteAccountEntry);

module.exports = router;
