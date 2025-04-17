const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { auth, adminAuth } = require("../middleware/auth");
const userController = require("../controllers/userController");

// Get all users (admin only)
router.get("/", adminAuth, userController.getAllUsers);

// Get user profile
router.get("/:id", userController.getUserProfile);

// Update user profile
router.put(
  "/:id",
  [
    auth,
    body("username").optional().trim().isLength({ min: 3 }),
    body("email").optional().isEmail().normalizeEmail(),
    body("profile.firstName").optional().trim(),
    body("profile.lastName").optional().trim(),
    body("profile.bio").optional().trim(),
    body("profile.avatar").optional().trim(),
  ],
  userController.updateUserProfile
);

// Change password
router.put(
  "/:id/password",
  [
    auth,
    body("currentPassword").exists(),
    body("newPassword").isLength({ min: 6 }),
  ],
  userController.changePassword
);

// Delete user account
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;
