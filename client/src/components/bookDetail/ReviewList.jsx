import React from 'react';
import ReviewItem from './ReviewItem';
import ReviewForm from './ReviewForm';

const ReviewList = ({ reviews, rating, setRating, onSubmitReview }) => {
  return (
    <div>
      {/* Write a Review Section */}
      <ReviewForm 
        rating={rating}
        setRating={setRating}
        onSubmit={onSubmitReview}
      />
      
      {/* Display Reviews */}
      <div className="space-y-6">
        <h3 className="font-['Playfair_Display',serif] text-lg font-semibold mb-4">Reader Reviews</h3>
        
        {reviews.length > 0 ? (
          <>
            {/* Review Items */}
            {reviews.map((review, index) => (
              <ReviewItem key={index} review={review} />
            ))}
            
            {/* Load More Button */}
            <div className="mt-6 text-center">
              <button className="text-amber-800 hover:text-amber-600 text-sm font-medium">
                Load More Reviews
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600 italic">No reviews yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewList;
