import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

// Sample book covers
const featuredBooks = [
  { id: 1, title: 'The Silent Echo', author: 'Elizabeth Murray', rating: 4.7, reviews: 104, cover: 'amber' },
  { id: 2, title: 'Beneath Azure Skies', author: 'Samuel Richards', rating: 4.9, reviews: 256, cover: 'amber' },
  { id: 3, title: 'Quantum Dreams', author: 'Naomi Chen', rating: 4.5, reviews: 87, cover: 'amber' },
];

const FeaturedBooks = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-end mb-10">
        <h2 className="font-['Playfair_Display',serif] text-3xl font-bold text-gray-800">Featured Books</h2>
        <Link to="/books" className="text-amber-800 hover:text-amber-700 transition-colors duration-300 text-sm font-medium">
          View all books →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
