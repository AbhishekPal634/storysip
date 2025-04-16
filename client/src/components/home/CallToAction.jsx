import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-amber-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-['Playfair_Display',serif] text-3xl font-bold mb-4">Ready to Find Your Next Read?</h2>
        <p className="mb-8 max-w-2xl mx-auto">Join our community of book lovers and discover personalized recommendations.</p>
        <Link to="/auth" 
          className="inline-block px-8 py-3 bg-white text-amber-800 rounded border-2 border-white font-medium 
          hover:bg-transparent hover:text-white transition-colors duration-300">
          Join Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
