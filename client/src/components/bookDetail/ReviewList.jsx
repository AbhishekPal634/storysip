import React, { useState, useEffect } from "react";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";
import { useAuth } from "../../context/AuthContext";
import LoginPrompt from "../common/LoginPrompt";
import bookService from "../../api/services/bookService";

function ReviewList({
  bookId,
  reviews = [],
  rating,
  setRating,
  onSubmitReview,
  onDeleteReview,
}) {
  const { user } = useAuth();
  const [hasReviewed, setHasReviewed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if user has reviewed this book
  useEffect(() => {
    const checkUserReview = async () => {
      if (!user?._id) return;

      try {
        setLoading(true);
        // Get all reviews for this book to check if user has reviewed
        const allReviews = await bookService.getBookReviews(bookId, {
          limit: 100,
        });
        const userHasReviewed = allReviews.some(
          (review) => review.user?._id === user._id
        );
        setHasReviewed(userHasReviewed);
      } catch (err) {
        console.error("Error checking user review:", err);
      } finally {
        setLoading(false);
      }
    };

    checkUserReview();
  }, [user, bookId, reviews]); // Add reviews to dependencies

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Reviews</h2>
        {loading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-amber-800"></div>
        ) : (
          hasReviewed && (
            <div className="text-amber-800 bg-amber-50 px-4 py-2 rounded-lg text-sm">
              You have already reviewed this book
            </div>
          )
        )}
      </div>

      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewItem
              key={review._id || review.id}
              review={review}
              onDelete={onDeleteReview}
              canDelete={
                user?.role === "admin" || review.user?._id === user?._id
              }
            />
          ))
        ) : (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>

      {user && !hasReviewed && !loading && (
        <ReviewForm
          rating={rating}
          setRating={setRating}
          onSubmitReview={onSubmitReview}
        />
      )}

      {!user && <LoginPrompt message="to leave a review" />}
    </div>
  );
}

export default ReviewList;
