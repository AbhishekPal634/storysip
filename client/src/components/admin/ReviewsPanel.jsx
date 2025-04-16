import React from 'react';
import { HiSearch } from 'react-icons/hi';

function ReviewsPanel({ reviews }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl font-['Playfair_Display',serif] font-semibold text-gray-800 mb-2 md:mb-0">Reviews Management</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search reviews..." 
              className="pl-10 pr-4 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
            />
            <HiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-sm rounded-lg overflow-hidden border border-amber-100 hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex flex-wrap justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-800">{review.bookTitle}</h3>
                <div className="flex items-center">
                  <div className="flex text-amber-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "text-amber-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">{review.rating}/5</span>
                </div>
              </div>
              
              <div className="flex flex-wrap text-sm text-gray-600 mb-3">
                <span>by <span className="font-medium">{review.user}</span></span>
                <span className="mx-2">•</span>
                <span>{review.date}</span>
              </div>
              
              <p className="text-gray-700">{review.content}</p>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button className="text-amber-800 hover:text-amber-600 text-sm font-medium">
                  Approve
                </button>
                <button className="text-red-500 hover:text-red-700 text-sm font-medium">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsPanel;
