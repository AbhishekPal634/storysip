import React, { useState, useEffect } from 'react';
import { HiX } from 'react-icons/hi';

function EditBookModal({ onClose, onSaveEdit, book }) {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    published: '',
    cover: ''
  });

  // Initialize form with book data when book changes
  useEffect(() => {
    if (book) {
      setBookData(book);
    }
  }, [book]);

  if (!book) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveEdit(bookData);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto z-50">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative">
          {/* Modal header */}
          <div className="bg-amber-50 px-4 py-3 border-b border-amber-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-['Playfair_Display',serif] font-semibold text-gray-800">Edit Book</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Modal body */}
          <div className="px-4 pt-5 pb-4 sm:p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Book Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={bookData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    required
                    value={bookData.author}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
                    Genre
                  </label>
                  <select
                    id="genre"
                    name="genre"
                    required
                    value={bookData.genre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  >
                    <option value="">Select a genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Romance">Romance</option>
                    <option value="Horror">Horror</option>
                    <option value="Adventure">Adventure</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="published" className="block text-sm font-medium text-gray-700 mb-1">
                    Publication Date
                  </label>
                  <input
                    type="date"
                    id="published"
                    name="published"
                    required
                    value={bookData.published}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="cover" className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Image URL
                  </label>
                  <input
                    type="url"
                    id="cover"
                    name="cover"
                    value={bookData.cover}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              
              {/* Modal footer */}
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-800 text-white rounded text-sm font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBookModal;
