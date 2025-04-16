import React from 'react';

const SearchAndFilter = ({ activeFilter, setActiveFilter, filters, onSearch }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-amber-100 p-5 mb-10">
      {/* Search Input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by title, author, or genre"
          className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
          onChange={(e) => onSearch(e.target.value)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter.toLowerCase() 
                ? 'bg-amber-800 text-white' 
                : 'bg-amber-50 text-gray-700 hover:bg-amber-100'
            }`}
            onClick={() => setActiveFilter(filter.toLowerCase())}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;
