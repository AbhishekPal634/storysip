const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { auth, adminAuth } = require("../middleware/auth");
const bookController = require("../controllers/bookController");

// Get all books with pagination, search, and filters
router.get("/", bookController.getAllBooks);

// Get featured books
router.get("/featured", bookController.getFeaturedBooks);

// Get single book
router.get("/:id", bookController.getBookById);

// Create new book (admin only)
router.post(
  "/",
  [
    adminAuth,
    body("title").trim().notEmpty(),
    body("author").trim().notEmpty(),
    body("description").trim().notEmpty(),
    body("isbn").trim().notEmpty(),
    body("coverImage").trim().notEmpty(),
    body("genre").isArray(),
    body("publishedYear").isNumeric(),
    body("publisher").trim().notEmpty(),
    body("pageCount").isNumeric(),
    body("language").trim().notEmpty(),
  ],
  bookController.createBook
);

// Update book (admin only)
router.put(
  "/:id",
  [
    adminAuth,
    body("title").optional().trim().notEmpty(),
    body("author").optional().trim().notEmpty(),
    body("description").optional().trim().notEmpty(),
    body("isbn").optional().trim().notEmpty(),
    body("coverImage").optional().trim().notEmpty(),
    body("genre").optional().isArray(),
    body("publishedYear").optional().isNumeric(),
    body("publisher").optional().trim().notEmpty(),
    body("pageCount").optional().isNumeric(),
    body("language").optional().trim().notEmpty(),
  ],
  bookController.updateBook
);

// Delete book (admin only)
router.delete("/:id", adminAuth, bookController.deleteBook);

module.exports = router;
