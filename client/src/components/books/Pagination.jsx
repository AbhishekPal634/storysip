import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    
    pages.push(1);
    
    if (currentPage > 2) {
      pages.push('...');
    }
    
    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(currentPage);
    }
    
    if (currentPage < totalPages - 1) {
      pages.push('...');
    }
    
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  return (
    <div className="flex justify-center items-center space-x-2">
      <button 
        className="px-4 py-2 rounded bg-amber-50 text-gray-700 hover:bg-amber-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded ${
            page === currentPage 
              ? 'bg-amber-800 text-white' 
              : page === '...'
                ? 'bg-transparent cursor-default'
                : 'bg-amber-50 text-gray-700 hover:bg-amber-100'
          }`}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      
      <button 
        className="px-4 py-2 rounded bg-amber-50 text-gray-700 hover:bg-amber-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
