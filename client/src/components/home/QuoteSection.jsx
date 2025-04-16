import React from 'react';

const QuoteSection = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <blockquote className="text-center italic text-gray-700">
          <p className="font-['Playfair_Display',serif] text-xl md:text-2xl max-w-3xl mx-auto">
            "A reader lives a thousand lives before he dies... The man who never reads lives only one."
          </p>
          <footer className="mt-3 text-gray-600">— George R.R. Martin</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
