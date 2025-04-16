import React from 'react';
import { Link } from 'react-router-dom';
import BookCover from './BookCover';
import StarRating from './StarRating';

const BookCard = ({ book }) => {
  const { id, title, author, rating, reviews, cover } = book;
  
  return (
    <div className="bg-white rounded overflow-hidden drop-shadow-sm hover:drop-shadow-md transition-shadow duration-300">
      <div className="h-64 bg-amber-50 flex items-center justify-center relative">
        <BookCover colorScheme={cover} size="medium" />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium text-amber-800">
          New Release
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-['Playfair_Display',serif] font-semibold text-xl mb-1 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">by {author}</p>
        <div className="flex items-center mb-4">
          <StarRating rating={rating} />
          <span className="ml-2 text-gray-600 text-sm">({reviews} reviews)</span>
        </div>
        <Link to={`/books/${id}`} 
          className="block w-full text-center py-2 border border-amber-800 text-amber-800 rounded 
          hover:bg-amber-50 transition-colors duration-300">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
