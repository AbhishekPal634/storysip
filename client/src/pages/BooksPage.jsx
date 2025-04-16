import React, { useState } from 'react';
import BookCard from '../components/books/BookCard';
import SearchAndFilter from '../components/books/SearchAndFilter';
import Pagination from '../components/books/Pagination';

function BooksPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const filters = ['All', 'Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Sci-Fi'];
  
  // Sample book data 
  const books = [
    { id: 1, title: 'The Silent Echo', author: 'Elizabeth Murray', reviews: 104, genres: 'Fiction • Mystery' },
    { id: 2, title: 'Beneath Azure Skies', author: 'Samuel Richards', reviews: 256, genres: 'Fiction • Fantasy' },
    { id: 3, title: 'Quantum Dreams', author: 'Naomi Chen', reviews: 87, genres: 'Sci-Fi • Adventure' },
    { id: 4, title: 'The Forgotten Path', author: 'Michael Torres', reviews: 159, genres: 'Mystery • Thriller' },
    { id: 5, title: 'Whispers in the Dark', author: 'Julia Reynolds', reviews: 132, genres: 'Horror • Mystery' },
    { id: 6, title: 'Chronicles of Destiny', author: 'Robert Bennett', reviews: 78, genres: 'Fantasy • Adventure' },
    { id: 7, title: 'The Art of Simplicity', author: 'Emma Clarke', reviews: 92, genres: 'Non-Fiction • Self-Help' },
    { id: 8, title: 'Starlight Serenade', author: 'David Wilson', reviews: 113, genres: 'Romance • Drama' },
    { id: 9, title: 'Memoirs of Tomorrow', author: 'Sophia Chang', reviews: 67, genres: 'Sci-Fi • Dystopian' },
  ];
  
  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };
  
  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page on new filter
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">Explore Books</h1>
        
        {/* Search & Filter Component */}
        <SearchAndFilter 
          activeFilter={activeFilter} 
          setActiveFilter={handleFilterChange} 
          filters={filters}
          onSearch={handleSearch}
        />
        
        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {books.map((book) => (
            <BookCard 
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              reviews={book.reviews}
              genres={book.genres}
            />
          ))}
        </div>
        
        {/* Pagination Component */}
        <Pagination 
          currentPage={currentPage}
          totalPages={10} // Example value
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default BooksPage;
