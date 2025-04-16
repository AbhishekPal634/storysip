import React from 'react';

const BookCover = ({ colorScheme = 'amber', size = 'medium' }) => {
  const sizes = {
    small: 'w-20 h-28',
    medium: 'w-28 h-40',
    large: 'w-32 h-48'
  };
  
  const schemes = {
    amber: 'from-amber-50 to-amber-200 text-amber-800',
    blue: 'from-blue-50 to-blue-200 text-blue-800',
    rose: 'from-rose-50 to-rose-200 text-rose-800',
  };
  
  return (
    <div 
      className={`${sizes[size]} bg-gradient-to-br ${schemes[colorScheme]} rounded drop-shadow-md 
        hover:drop-shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="h-full w-full flex items-center justify-center text-sm">
        <div className="w-1/2 h-1/2 border-t border-r border-current opacity-20"></div>
      </div>
    </div>
  );
};

export default BookCover;
