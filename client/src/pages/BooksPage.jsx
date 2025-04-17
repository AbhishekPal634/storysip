import React, { useState, useEffect } from "react";
import BookCard from "../components/books/BookCard";
import SearchAndFilter from "../components/books/SearchAndFilter";
import Pagination from "../components/books/Pagination";
import bookService from "../api/services/bookService";

function BooksPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const filters = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Fantasy",
    "Sci-Fi",
    "Romance",
    "Horror",
    "Adventure",
  ];

  useEffect(() => {
    fetchBooks();
  }, [activeFilter, searchQuery, currentPage]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError("");
      const params = {
        page: currentPage,
        limit: 9, // 3x3 grid
      };

      // Only add search parameter if there's a search query
      if (searchQuery) {
        params.search = searchQuery;
      }

      // Only add genre parameter if a specific genre is selected (not "All")
      if (activeFilter !== "All") {
        params.genre = activeFilter;
      }

      const response = await bookService.getBooks(params);
      setBooks(response.books);
      setTotalPages(response.totalPages);
    } catch (err) {
      setError("Failed to load books. Please try again later.");
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
          Explore Books
        </h1>

        {/* Search & Filter Component */}
        <SearchAndFilter
          activeFilter={activeFilter}
          setActiveFilter={handleFilterChange}
          filters={filters}
          onSearch={handleSearch}
        />

        {/* Error Message */}
        {error && <div className="text-red-600 text-center mb-8">{error}</div>}

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-amber-800 border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {books.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>

            {/* Pagination Component */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BooksPage;
