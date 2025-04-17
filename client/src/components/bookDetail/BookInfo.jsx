import React from "react";
import StarRating from "../home/StarRating";

const BookInfo = ({ book }) => {
  const {
    title,
    author,
    description,
    isbn,
    coverImage,
    genre,
    publishedYear,
    publisher,
    pageCount,
    language,
    averageRating,
    totalReviews,
    featured,
    createdAt,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      {/* Book Cover */}
      <div className="md:w-1/3 lg:w-1/4 self-start">
        <img
          src={coverImage || "/images/book.png"}
          alt={`${title} book cover`}
          className="rounded shadow-md w-full max-w-xs mx-auto"
        />
      </div>

      {/* Book Info */}
      <div className="md:w-2/3 lg:w-3/4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-gray-800">
            {title}
          </h1>
          {featured && (
            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-xl text-gray-600 mb-4">by {author}</p>

        <div className="flex items-center mb-4">
          <StarRating rating={averageRating} size="medium" />
          <span className="ml-2 text-gray-600">
            {averageRating.toFixed(1)} ({totalReviews} reviews)
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {genre.map((g, index) => (
            <span
              key={index}
              className="bg-amber-50 text-amber-800 text-xs font-medium px-3 py-1 rounded-full"
            >
              {g}
            </span>
          ))}
        </div>

        {/* Book Description */}
        <div className="prose max-w-none mb-8">
          <h3 className="text-xl font-semibold mb-4">About the Book</h3>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Book Details */}
        <div className="bg-amber-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Book Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">ISBN</p>
              <p className="font-medium">{isbn}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Publisher</p>
              <p className="font-medium">{publisher}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Published Year</p>
              <p className="font-medium">{publishedYear}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pages</p>
              <p className="font-medium">{pageCount}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Language</p>
              <p className="font-medium">{language}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Added</p>
              <p className="font-medium">
                {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Book Statistics */}
        <div className="bg-amber-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Book Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-800">
                {totalReviews}
              </p>
              <p className="text-sm text-gray-600">Total Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-800">
                {averageRating.toFixed(1)}
              </p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-800">{pageCount}</p>
              <p className="text-sm text-gray-600">Pages</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-800">
                {genre.length}
              </p>
              <p className="text-sm text-gray-600">Genres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
