const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { auth, adminAuth } = require("../middleware/auth");
const reviewController = require("../controllers/reviewController");

// Get all reviews (admin only)
router.get("/", adminAuth, reviewController.getAllReviews);

// Get reviews for a book
router.get("/book/:bookId", reviewController.getBookReviews);

// Get user's reviews
router.get("/user/:userId", reviewController.getUserReviews);

// Create new review
router.post(
  "/",
  [
    auth,
    body("book").isMongoId(),
    body("rating").isInt({ min: 1, max: 5 }),
    body("title").trim().notEmpty(),
    body("content").trim().notEmpty(),
  ],
  reviewController.createReview
);

// Update review
router.put(
  "/:id",
  [
    auth,
    body("rating").optional().isInt({ min: 1, max: 5 }),
    body("title").optional().trim().notEmpty(),
    body("content").optional().trim().notEmpty(),
  ],
  reviewController.updateReview
);

// Delete review
router.delete("/:id", [auth, adminAuth], reviewController.deleteReview);

// Like/unlike review
router.post("/:id/like", auth, reviewController.toggleLike);

module.exports = router;
