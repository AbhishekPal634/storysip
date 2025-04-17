import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 px-4 lg:px-8 border-b border-amber-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side: Single Book Image */}
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <div className="max-w-xl">
              <img
                src="/images/book.png"
                alt="Featured book"
                className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right side: This Month Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Community Favorites
            </h2>
            <p className="text-gray-700 mb-6 max-w-lg leading-relaxed">
              Discover the books that are making waves. From gripping stories to
              insightful reads, these top-rated picks come with honest reviews
              from fellow book lovers.
            </p>
            <Link
              to="/books"
              className="inline-block px-6 py-2 border-2 border-amber-800 text-amber-800 rounded 
              hover:bg-amber-50 transition-colors duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
