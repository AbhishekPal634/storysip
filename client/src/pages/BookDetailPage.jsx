import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BookInfo from "../components/bookDetail/BookInfo";
import ReviewList from "../components/bookDetail/ReviewList";
import bookService from "../api/services/bookService";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "../components/common/LoadingSpinner";

function BookDetailPage() {
  const { bookId } = useParams();
  const { user } = useAuth();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchBookData();
  }, [bookId]);

  const fetchBookData = async () => {
    try {
      setLoading(true);
      const [bookData, reviewsData] = await Promise.all([
        bookService.getBookById(bookId),
        bookService.getBookReviews(bookId),
      ]);
      setBook(bookData);
      setReviews(reviewsData || []);
    } catch (err) {
      console.error("Error fetching book data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (reviewData) => {
    try {
      await bookService.addReview(bookId, reviewData);
      await fetchBookData(); // Refresh both book and reviews
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await bookService.deleteReview(reviewId);
      await fetchBookData(); // Refresh both book and reviews
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">Book not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/books"
          className="inline-flex items-center text-amber-800 hover:text-amber-600 mb-8 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Back to Browse
        </Link>

        <BookInfo book={book} />

        <div className="mt-8">
          <ReviewList
            bookId={bookId}
            reviews={reviews}
            rating={rating}
            setRating={setRating}
            onSubmitReview={handleSubmitReview}
            onDeleteReview={handleDeleteReview}
          />
        </div>
      </div>
    </div>
  );
}

export default BookDetailPage;
