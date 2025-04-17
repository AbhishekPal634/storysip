import React from "react";
import { HiSearch, HiPlus, HiTrash } from "react-icons/hi";

function BooksPanel({ books, onAddBook, onDeleteBook }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl font-['Playfair_Display',serif] font-semibold text-gray-800 mb-2 md:mb-0">
          Books Management
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
              className="pl-10 pr-4 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
            />
            <HiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <button
            onClick={onAddBook}
            className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 inline-flex items-center justify-center transition-colors"
          >
            <HiPlus className="mr-1" /> Add New Book
          </button>
        </div>
      </div>

      {/* Books Table */}
      <div className="bg-white rounded-lg overflow-hidden border border-amber-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-amber-100">
            <thead className="bg-amber-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Book
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Author
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Genre
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Published
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-amber-100">
              {books.map((book) => (
                <tr key={book._id} className="hover:bg-amber-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-8 mr-3 flex-shrink-0">
                        <img
                          src={book.coverImage || "/images/book.png"}
                          alt={`${book.title} cover`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-gray-800">
                        {book.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {book.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-amber-100 text-amber-800">
                      {Array.isArray(book.genre) ? book.genre.join(", ") : book.genre}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-amber-500">★</span>
                      <span className="ml-1 text-gray-700">
                        {book.averageRating || 0} ({book.totalReviews || 0})
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {book.publishedYear || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onDeleteBook(book._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <HiTrash className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BooksPanel;
