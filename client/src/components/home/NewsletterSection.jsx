import React from 'react';

const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // newsletter subscription logic here
    console.log('Newsletter subscription submitted');
  };

  return (
    <section className="bg-white py-16 border-y border-amber-100">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl font-bold mb-4 text-gray-800">Stay Updated</h2>
        <p className="text-gray-700 mb-6">Receive notifications about new releases, author events, and personalized recommendations.</p>
        <form className="flex flex-col md:flex-row gap-2" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="md:flex-1 px-4 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            required
          />
          <button 
            type="submit"
            className="px-6 py-2 bg-amber-800 text-white rounded font-medium hover:bg-amber-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
};

export default NewsletterSection;
