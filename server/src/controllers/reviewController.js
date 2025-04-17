const Review = require("../models/Review");
const Book = require("../models/Book");
const mongoose = require("mongoose");

// Get reviews for a book
exports.getBookReviews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const reviews = await Review.find({ book: req.params.bookId })
      .populate("user", "firstName lastName email role")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Review.countDocuments({ book: req.params.bookId });

    res.json({
      reviews,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalReviews: total,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get user's reviews
exports.getUserReviews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const reviews = await Review.find({ user: req.params.userId })
      .populate("book", "title author coverImage")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Review.countDocuments({ user: req.params.userId });

    res.json({
      reviews,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalReviews: total,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create new review
exports.createReview = async (req, res) => {
  try {
    // Check if book exists
    const book = await Book.findById(req.body.book);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Check if user already reviewed this book
    const existingReview = await Review.findOne({
      book: req.body.book,
      user: req.user.id,
    });

    if (existingReview) {
      return res
        .status(400)
        .json({ message: "You have already reviewed this book" });
    }

    const review = new Review({
      ...req.body,
      user: req.user.id,
    });

    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update review
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Check if user owns the review
    if (review.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Check if user owns the review or is an admin
    if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    // Store the book ID before deleting
    const bookId = review.book;

    // Delete the review and trigger middleware
    await Review.findOneAndDelete({ _id: req.params.id });

    // Manually update book statistics since middleware might not trigger
    await updateBookStatistics(bookId);

    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error("Delete review error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Helper function to update book statistics
async function updateBookStatistics(bookId) {
  const Book = mongoose.model("Book");
  const Review = mongoose.model("Review");

  const reviews = await Review.find({ book: bookId });
  const totalReviews = reviews.length;

  if (totalReviews > 0) {
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / totalReviews;

    await Book.findByIdAndUpdate(bookId, {
      averageRating: parseFloat(averageRating.toFixed(1)),
      totalReviews,
    });
  } else {
    // If no reviews, reset to default values
    await Book.findByIdAndUpdate(bookId, {
      averageRating: 0,
      totalReviews: 0,
    });
  }
}

// Like/unlike review
exports.toggleLike = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    const likeIndex = review.likes.indexOf(req.user.id);
    if (likeIndex === -1) {
      review.likes.push(req.user.id);
    } else {
      review.likes.splice(likeIndex, 1);
    }

    await review.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all reviews (admin only)
exports.getAllReviews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const reviews = await Review.find()
      .populate("user", "firstName lastName email")
      .populate("book", "title author")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Review.countDocuments();

    res.json({
      reviews,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalReviews: total,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
