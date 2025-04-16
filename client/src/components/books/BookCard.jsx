import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ id, title, author, reviews, genres }) => {
  return (
    <Link to={`/books/${id}`} className="group">
      <div className="bg-white rounded overflow-hidden drop-shadow-sm hover:drop-shadow-md transition-all duration-300 flex flex-col h-full">
        {/* Book Cover */}
        <div className="h-56 bg-amber-50 p-4 flex items-center justify-center">
          <img 
            src="/images/book.png" 
            alt={`${title} cover`}
            className="max-h-full w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Book Info */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-['Playfair_Display',serif] font-semibold text-lg mb-1 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">by {author}</p>
          
          <div className="flex items-center mb-2 mt-auto">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600 text-xs">({reviews} reviews)</span>
          </div>
          <p className="text-gray-500 text-xs">{genres}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
