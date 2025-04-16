import React from 'react';
import StarRating from '../home/StarRating';

const ReviewForm = ({ rating, setRating, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.target);
    const reviewText = formData.get('reviewText');
    
    // Call the onSubmit function with the form data
    onSubmit({ rating, reviewText });
    
    // Reset form
    e.target.reset();
    setRating(0);
  };
  
  return (
    <div className="bg-white rounded shadow-sm border border-amber-100 p-6 mb-8">
      <h3 className="font-['Playfair_Display',serif] text-lg font-semibold mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit}>
        {/* Star Rating Selector */}
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
        
        {/* Review Text */}
        <div className="mb-4">
          <label htmlFor="reviewText" className="block text-gray-700 mb-2">Your Review</label>
          <textarea
            id="reviewText"
            name="reviewText"
            rows="4"
            className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-colors"
            placeholder="Share your thoughts on this book..."
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="px-6 py-2 bg-amber-800 text-white font-medium rounded hover:bg-amber-700 transition-colors shadow-sm"
          disabled={rating === 0}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
