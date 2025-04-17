import React, { useState } from "react";
import { HiX } from "react-icons/hi";

function AddBookModal({ onClose, onAddBook }) {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    isbn: "",
    coverImage: "",
    genre: [],
    publishedYear: "",
    publisher: "",
    pageCount: "",
    language: "",
    featured: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGenreChange = (e) => {
    const { value, checked } = e.target;
    setBookData((prev) => ({
      ...prev,
      genre: checked
        ? [...prev.genre, value]
        : prev.genre.filter((g) => g !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(bookData);
  };

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Fantasy",
    "Sci-Fi",
    "Romance",
    "Horror",
    "Adventure",
  ];

  return (
    <div className="fixed inset-0 overflow-y-auto z-50">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full relative">
          {/* Modal header */}
          <div className="bg-amber-50 px-4 py-3 border-b border-amber-100">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-['Playfair_Display',serif] font-semibold text-gray-800">
                Add New Book
              </h3>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
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
                  <label
                    htmlFor="author"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
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
                  <label
                    htmlFor="isbn"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    ISBN
                  </label>
                  <input
                    type="text"
                    id="isbn"
                    name="isbn"
                    required
                    value={bookData.isbn}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={bookData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="publisher"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Publisher
                  </label>
                  <input
                    type="text"
                    id="publisher"
                    name="publisher"
                    required
                    value={bookData.publisher}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="publishedYear"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Published Year
                  </label>
                  <input
                    type="number"
                    id="publishedYear"
                    name="publishedYear"
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                    value={bookData.publishedYear}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pageCount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Page Count
                  </label>
                  <input
                    type="number"
                    id="pageCount"
                    name="pageCount"
                    required
                    min="1"
                    value={bookData.pageCount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Language
                  </label>
                  <input
                    type="text"
                    id="language"
                    name="language"
                    required
                    value={bookData.language}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="coverImage"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Cover Image URL
                  </label>
                  <input
                    type="url"
                    id="coverImage"
                    name="coverImage"
                    required
                    value={bookData.coverImage}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Genres
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {genres.map((genre) => (
                      <label
                        key={genre}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          value={genre}
                          checked={bookData.genre.includes(genre)}
                          onChange={handleGenreChange}
                          className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-sm text-gray-700">{genre}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={bookData.featured}
                      onChange={handleChange}
                      className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Featured Book
                    </span>
                  </label>
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
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBookModal;
