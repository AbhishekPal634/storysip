import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookInfo from '../components/bookDetail/BookInfo';
import ReviewList from '../components/bookDetail/ReviewList';

function BookDetailPage() {
  const { bookId } = useParams();
  const [activeTab, setActiveTab] = useState('details');
  const [rating, setRating] = useState(0);

  // Sample book data 
  const bookData = {
    id: bookId,
    title: 'The Amazing Journey',
    author: 'Sarah Johnson',
    rating: 4.7,
    reviewCount: 126,
    genres: ['Fiction', 'Adventure', 'Fantasy'],
    publishDate: 'January 15, 2025',
    pages: 342,
    language: 'English'
  };

  // Sample reviews data
  const reviewsData = [
    { 
      user: "Alex P.", 
      rating: 5, 
      comment: "This book was absolutely incredible. The character development and world-building are top notch. I couldn't put it down!",
      date: "March 15, 2025"
    },
    { 
      user: "Morgan T.", 
      rating: 4, 
      comment: "A great read with engaging plot twists. The ending left me wanting more.",
      date: "March 2, 2025"
    },
    { 
      user: "Jamie K.", 
      rating: 5, 
      comment: "One of the best books I've read this year. The author really knows how to create an immersive experience.",
      date: "February 28, 2025"
    }
  ];

  // Handle review submission
  const handleSubmitReview = (reviewData) => {
    console.log('Review submitted:', reviewData);
    // send this to an API
    alert('Thank you for your review!');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Back Navigation */}
        <Link to="/books" className="inline-flex items-center text-amber-800 hover:text-amber-600 mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Browse
        </Link>

        {/* Book Header Section */}
        <BookInfo book={bookData} />
        
        {/* Tabs Navigation */}
        <div className="border-b border-amber-100 mb-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('details')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'details'
                  ? 'border-amber-800 text-amber-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-amber-200'
              }`}
            >
              Book Details
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-amber-800 text-amber-800'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-amber-200'
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'details' && (
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
            <p className="mb-4">Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.</p>
            <p>Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor.</p>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <ReviewList
            reviews={reviewsData}
            rating={rating}
            setRating={setRating}
            onSubmitReview={handleSubmitReview}
          />
        )}
      </div>
    </div>
  );
}

export default BookDetailPage;
