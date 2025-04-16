import React from 'react';
import StarRating from '../home/StarRating';

const ReviewItem = ({ review }) => {
  const { user, rating, comment, date } = review;
  
  return (
    <div className="bg-white rounded shadow-sm p-5 border border-amber-100">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-medium text-gray-800">{user}</h4>
          <div className="flex text-amber-400 mt-1">
            <StarRating rating={rating} size="small" />
          </div>
        </div>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

export default ReviewItem;
