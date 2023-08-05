const express = require("express");
const router = express.Router();
const resetPasswordController = require("../controllers/resetPasswordController");

router.get("/forgotPasswordPage", resetPasswordController.forgotPasswordPage);
router.post("/sendMail", resetPasswordController.sendMail);
router.get(
  "/resetPasswordPage/:requestId",
  resetPasswordController.resetPasswordPage
);
router.post("/resetPassword", resetPasswordController.updatePassword);

module.exports = router;
