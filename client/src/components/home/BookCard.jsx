import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function BookCard({ book }) {
  if (!book) return null;

  const { _id, title, author, averageRating, totalReviews, genre, coverImage } =
    book;

  return (
    <div className="bg-white rounded overflow-hidden drop-shadow-sm hover:drop-shadow-md transition-shadow duration-300">
      <div className="h-64 bg-amber-50 flex items-center justify-center relative">
        <img
          src={coverImage || "/images/book.png"}
          alt={`${title} cover`}
          className="max-h-full w-auto object-contain"
          onError={(e) => {
            e.target.src = "/images/book.png";
          }}
        />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium text-amber-800">
          New Release
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-['Playfair_Display',serif] font-semibold text-xl mb-1 text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">by {author}</p>
        <div className="flex items-center mb-4">
          <StarRating rating={averageRating || 0} />
          <span className="ml-2 text-gray-600 text-sm">
            ({totalReviews || 0} reviews)
          </span>
        </div>
        <Link
          to={`/books/${_id}`}
          className="block w-full text-center py-2 border border-amber-800 text-amber-800 rounded 
          hover:bg-amber-50 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;
