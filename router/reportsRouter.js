const express = require("express");
const router = express.Router();
const reportsController = require("../controllers/reportsController");
const userAuthentication = require("../middleware/auth");

router.get("/getReportsPage", reportsController.getReportsPage);
router.post(
  "/dailyReports",
  userAuthentication,
  reportsController.dailyReports
);
router.post(
  "/monthlyReports",
  userAuthentication,
  reportsController.monthlyReports
);

module.exports = router;