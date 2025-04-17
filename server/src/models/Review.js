const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
reviewSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Update book's average rating and total reviews when a review is saved
reviewSchema.post("save", async function () {
  await updateBookStatistics(this.book);
});

// Update book's average rating and total reviews when a review is deleted
reviewSchema.post("remove", async function () {
  await updateBookStatistics(this.book);
});

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

module.exports = mongoose.model("Review", reviewSchema);
