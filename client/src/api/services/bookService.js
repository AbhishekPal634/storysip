import apiClient from "../config";

const bookService = {
  // Get all books with optional filters
  getBooks: async (params = {}) => {
    const response = await apiClient.get("/books", { params });
    return response.data;
  },

  // Get a single book by ID
  getBookById: async (id) => {
    const response = await apiClient.get(`/books/${id}`);
    return response.data;
  },

  // Create a new book
  createBook: async (bookData) => {
    const response = await apiClient.post("/books", bookData);
    return response.data;
  },

  // Update a book
  updateBook: async (id, bookData) => {
    const response = await apiClient.put(`/books/${id}`, bookData);
    return response.data;
  },

  // Delete a book
  deleteBook: async (id) => {
    await apiClient.delete(`/books/${id}`);
  },

  // Get book reviews
  getBookReviews: async (bookId) => {
    const response = await apiClient.get(`/reviews/book/${bookId}`);
    return response.data.reviews || [];
  },

  // Add a review to a book
  addReview: async (bookId, reviewData) => {
    const response = await apiClient.post("/reviews", {
      book: bookId,
      rating: reviewData.rating,
      title: "Review", // Default title since it's required by the server
      content: reviewData.content,
    });
    return response.data;
  },

  // Delete a review
  deleteReview: async (reviewId) => {
    await apiClient.delete(`/reviews/${reviewId}`);
  },

  // Get featured books
  getFeaturedBooks: async () => {
    const response = await apiClient.get("/books/featured");
    return response.data;
  },

  // Get books by category
  getBooksByCategory: async (category) => {
    const response = await apiClient.get(`/books/category/${category}`);
    return response.data;
  },
};

export default bookService;
