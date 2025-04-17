const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { auth, adminAuth } = require("../middleware/auth");
const userController = require("../controllers/userController");

// User routes (requires authentication)
// Get user profile
router.get("/:id", auth, userController.getUserProfile);

// Get user reviews
router.get("/:id/reviews", auth, userController.getUserReviews);

// Update user profile
router.put(
  "/:id",
  [
    auth,
    body("username")
      .optional()
      .trim()
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long"),
    body("email")
      .optional()
      .isEmail()
      .withMessage("Please provide a valid email address")
      .normalizeEmail(),
    body("profile.firstName")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("First name cannot be empty if provided"),
    body("profile.lastName")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Last name cannot be empty if provided"),
    body("profile.bio")
      .optional()
      .trim()
      .isLength({ max: 500 })
      .withMessage("Bio cannot exceed 500 characters"),
    body("profile.avatar")
      .optional()
      .trim()
      .isURL()
      .withMessage("Please provide a valid URL for the avatar"),
  ],  userController.updateUserProfile
);

// Delete user account
router.delete("/:id", auth, userController.deleteUser);

// Admin routes
// Get all users (admin only)
router.get("/", adminAuth, userController.getAllUsers);

module.exports = router;
