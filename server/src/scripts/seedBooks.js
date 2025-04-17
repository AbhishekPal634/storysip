const mongoose = require("mongoose");
const Book = require("../models/Book");
const dummyData = require("../data/dummyData");

// Transform the dummy data to match the Book schema
const transformBookData = (book) => {
  // Convert genres object to array of active genres
  const genres = Object.entries(book.Genres)
    .filter(([_, value]) => value)
    .map(([genre]) => genre);

  return {
    title: book["Book Title"],
    author: book.Author,
    description: book.Description,
    isbn: book.ISBN,
    coverImage: book["Cover Image URL"],
    genre: genres,
    publishedYear: book["Published Year"],
    publisher: book.Publisher,
    pageCount: book["Page Count"],
    language: book.Language,
    averageRating: 0, // Default value
    totalReviews: 0, // Default value
    featured: book["Featured Book"],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

const seedBooks = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/storysip"
    );

    console.log("Connected to MongoDB");

    // Clear existing books
    await Book.deleteMany({});
    console.log("Cleared existing books");

    // Transform and insert books
    const transformedBooks = dummyData.map(transformBookData);
    await Book.insertMany(transformedBooks);
    console.log(`Successfully seeded ${transformedBooks.length} books`);

    // Close the connection
    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding books:", error);
    process.exit(1);
  }
};

// Run the seed function
seedBooks();
