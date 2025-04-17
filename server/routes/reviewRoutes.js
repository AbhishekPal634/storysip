const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { auth, adminAuth } = require("../middleware/auth");
const reviewController = require("../controllers/reviewController");

// Public routes
// Get reviews for a book
router.get("/book/:bookId", reviewController.getBookReviews);

// User routes (requires authentication)
// Get user's reviews
router.get("/user/:userId", auth, reviewController.getUserReviews);

// Create new review
router.post(
  "/",
  [
    auth,
    body("book")
      .isMongoId()
      .withMessage("Valid book ID is required"),
    body("rating")
      .isInt({ min: 1, max: 5 })
      .withMessage("Rating must be between 1 and 5"),
    body("title")
      .trim()
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ min: 3, max: 100 })
      .withMessage("Title must be between 3 and 100 characters"),
    body("content")
      .trim()
      .notEmpty()
      .withMessage("Review content is required")
      .isLength({ min: 10 })
      .withMessage("Review content must be at least 10 characters long"),
  ],
  reviewController.createReview
);

// Update review
router.put(
  "/:id",
  [
    auth,
    body("rating")
      .optional()
      .isInt({ min: 1, max: 5 })
      .withMessage("Rating must be between 1 and 5"),
    body("title")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Title cannot be empty")
      .isLength({ min: 3, max: 100 })
      .withMessage("Title must be between 3 and 100 characters"),
    body("content")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Review content cannot be empty")
      .isLength({ min: 10 })
      .withMessage("Review content must be at least 10 characters long"),
  ],
  reviewController.updateReview
);

// Delete review (users can delete their own reviews, admins can delete any)
router.delete("/:id", auth, reviewController.deleteReview);

// Admin routes
// Get all reviews (admin only)
router.get("/", adminAuth, reviewController.getAllReviews);

module.exports = router;
