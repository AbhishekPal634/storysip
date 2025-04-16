import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Sci-Fi', 'Biography'];
  
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="font-['Playfair_Display',serif] text-3xl font-bold mb-10 text-center text-gray-800">Discover by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {categories.map((category) => (
          <Link 
            key={category} 
            to={`/books?category=${category.toLowerCase()}`}
            className="bg-white rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100"
          >
            <div className="text-amber-800 mb-2 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-medium">{category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
