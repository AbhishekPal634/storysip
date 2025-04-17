import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import bookService from "../../api/services/bookService";
import LoadingSpinner from "../common/LoadingSpinner";

function FeaturedBooks() {
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded overflow-hidden drop-shadow-sm animate-pulse"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FeaturedBooks;
