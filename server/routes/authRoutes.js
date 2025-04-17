const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/authController");
const { auth } = require("../middleware/auth");

// Register new user
router.post(
  "/register",
  [
    body("firstName").trim().notEmpty().withMessage("First name is required"),
    body("lastName").trim().notEmpty().withMessage("Last name is required"),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  authController.register
);

// Login user
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Please enter a valid email"),
    body("password").exists().withMessage("Password is required"),
  ],
  authController.login
);

// Get current user
router.get("/me", auth, authController.getCurrentUser);

module.exports = router;
