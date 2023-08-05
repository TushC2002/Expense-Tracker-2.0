const express = require("express");

const purchaseMembershipController = require("../controllers/purchaseMembershipController");

const authenticatemiddleware = require("../middleware/auth");

const router = express.Router();

router.get(
  "/premiumMembership",
  authenticatemiddleware,
  purchaseMembershipController.purchasePremium
);

router.post(
  "/updateTransactionStatus",
  authenticatemiddleware,
  purchaseMembershipController.updateTransactionStatus
);

module.exports = router;
