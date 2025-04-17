const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: String,
      required: true,
    },
  ],
  publishedYear: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
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
bookSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Book", bookSchema);
