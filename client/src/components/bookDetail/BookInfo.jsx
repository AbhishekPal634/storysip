import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../home/StarRating';

const BookInfo = ({ book }) => {
  const { id, title, author, rating, reviewCount, genres, publishDate, pages, language } = book;
  
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      {/* Book Cover */}
      <div className="md:w-1/3 lg:w-1/4 self-start">
        <img 
          src="/images/book.png" 
          alt={`${title} book cover`}
          className="rounded shadow-md w-full max-w-xs mx-auto"
        />
      </div>
      
      {/* Book Info */}
      <div className="md:w-2/3 lg:w-3/4">
        <h1 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-2 text-gray-800">
          {title} <span className="text-gray-500 font-normal">({id})</span>
        </h1>
        <p className="text-xl text-gray-600 mb-4">by {author}</p>
        
        <div className="flex items-center mb-4">
          <StarRating rating={rating} size="medium" />
          <span className="ml-2 text-gray-600">{rating} ({reviewCount} reviews)</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {genres.map((genre, index) => (
            <span key={index} className="bg-amber-50 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
              {genre}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 mb-6">
          <button className="px-6 py-2 bg-amber-800 text-white font-medium rounded hover:bg-amber-700 transition-colors shadow-sm">
            Read Now
          </button>
          <button className="px-6 py-2 border-2 border-amber-800 text-amber-800 font-medium rounded hover:bg-amber-50 transition-colors">
            Add to Wishlist
          </button>
        </div>
        
        <div>
          <p className="text-gray-700">Published: <span className="font-medium">{publishDate}</span></p>
          <p className="text-gray-700">Pages: <span className="font-medium">{pages}</span></p>
          <p className="text-gray-700">Language: <span className="font-medium">{language}</span></p>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
