const express = require("express");
const userController = require("../controllers/User.js");
const m = require("../middleware/verifyToken.js");


const router = express.Router();

router.post("/signup", userController.UserRegister);
router.post("/signin", userController.UserLogin);

router.get("/dashboard", m.verifyToken, userController.getUserDashboard);
router.get("/workout", m.verifyToken, userController.getWorkoutsByDate);
router.post("/workout", m.verifyToken, userController.addWorkout);
router.post("/contact", m.verifyToken, userController.contact);

module.exports = router;
