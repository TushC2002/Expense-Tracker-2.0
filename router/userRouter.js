const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userAuthentication = require("../middleware/auth");

router.use(express.static("public"));

router.get("/", userController.getLoginPage);
router.get("/isPremiumUser", userAuthentication, userController.isPremiumUser);
router.get("/getAllUsers", userController.getAllUsers);
router.post("/login", userController.postUserLogin);
router.post("/signUp", userController.postUserSignUp);

module.exports = router;