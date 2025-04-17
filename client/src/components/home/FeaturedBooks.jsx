import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import bookService from "../../api/services/bookService";
import LoadingSpinner from "../common/LoadingSpinner";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FeaturedBooks() {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await bookService.getFeaturedBooks();
        setFeaturedBooks(data || []);
      } catch (err) {
        setError("Failed to load featured books. Please try again later.");
        console.error("Error fetching featured books:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBooks();
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredBooks.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredBooks.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Determine visible books for different screen sizes
  const getVisibleBooks = () => {
    if (featuredBooks.length === 0) return [];

    // Create a wrapped array to handle circular navigation
    const wrappedBooks = [...featuredBooks];
    const totalBooks = featuredBooks.length;

    // For mobile: show 1 book
    if (window.innerWidth < 768) {
      return [wrappedBooks[currentIndex]];
    }

    // For medium screens: show 2 books
    if (window.innerWidth < 1024) {
      return [
        wrappedBooks[currentIndex],
        wrappedBooks[(currentIndex + 1) % totalBooks],
      ];
    }

    // For large screens: show 3 books
    return [
      wrappedBooks[currentIndex],
      wrappedBooks[(currentIndex + 1) % totalBooks],
      wrappedBooks[(currentIndex + 2) % totalBooks],
    ];
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-end mb-10">
        <h2 className="font-['Playfair_Display',serif] text-3xl font-bold text-gray-800">
          Featured Books
        </h2>
        <Link
          to="/books"
          className="text-amber-800 hover:text-amber-700 transition-colors duration-300 text-sm font-medium"
        >
          View all books →
        </Link>
      </div>

      {error && <div className="text-red-600 text-center mb-8">{error}</div>}

      {loading ? (
        <div className="flex space-x-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded overflow-hidden drop-shadow-sm animate-pulse flex-1"
            >
              <div className="h-64 bg-amber-50"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative">
          {/* Carousel Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Previous book"
          >
            <ChevronLeft size={24} className="text-amber-800" />
          </button>

          {/* Carousel Content */}
          <div className="flex justify-center space-x-8 overflow-hidden py-4 px-8">
            {featuredBooks.length > 0 &&
              getVisibleBooks().map((book, idx) => (
                <div
                  key={book._id}
                  className="flex-1 transition-all duration-500 ease-in-out transform"
                >
                  <BookCard book={book} />
                </div>
              ))}
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Next book"
          >
            <ChevronRight size={24} className="text-amber-800" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredBooks.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-amber-800" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedBooks;
