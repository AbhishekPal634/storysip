import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../home/StarRating";

function BookCard({ book }) {
  if (!book) return null;

  const { _id, title, author, averageRating, totalReviews, genre, coverImage } =
    book;

  return (
    <Link to={`/books/${_id}`} className="group">
      <div className="bg-white rounded overflow-hidden drop-shadow-sm hover:drop-shadow-md transition-all duration-300 flex flex-col h-full">
        {/* Book Cover */}
        <div className="h-56 bg-amber-50 p-4 flex items-center justify-center">
          <img
            src={coverImage || "/images/book.png"}
            alt={`${title} cover`}
            className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "/images/book.png";
            }}
          />
        </div>

        {/* Book Info */}
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="font-['Playfair_Display',serif] font-semibold text-lg mb-1 text-gray-800">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">by {author}</p>

          <div className="flex items-center mb-2 mt-auto">
            <div className="flex text-amber-400">
              <StarRating rating={averageRating || 0} size="small" />
            </div>
            <span className="ml-2 text-gray-600 text-xs">
              ({totalReviews || 0} reviews)
            </span>
          </div>
          <p className="text-gray-500 text-xs">{genre}</p>  
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
