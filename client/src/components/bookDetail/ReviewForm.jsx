import React, { useState } from "react";
import StarRating from "../home/StarRating";

function ReviewForm({ rating, setRating, onSubmitReview }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) return;

    try {
      setIsSubmitting(true);
      await onSubmitReview({ rating, content });
      setContent("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded shadow-sm border border-amber-100 p-6 mb-8">
      <h3 className="font-['Playfair_Display',serif] text-lg font-semibold mb-4">
        Write a Review
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Your Rating</label>
          <StarRating
            rating={rating}
            onRatingChange={setRating}
            interactive={true}
            size="large"
            showText={true}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reviewText" className="block text-gray-700 mb-2">
            Your Review
          </label>
          <textarea
            id="reviewText"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-colors"
            placeholder="Share your thoughts on this book..."
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-amber-800 text-white font-medium rounded hover:bg-amber-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={rating === 0 || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
