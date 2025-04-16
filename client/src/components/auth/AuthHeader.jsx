import React from 'react';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <div className="text-center mb-8">
      <Link to="/" className="inline-block">
        <h2 className="font-['Playfair_Display',serif] text-3xl font-bold tracking-tight">
          <span className="text-gray-800">Story</span>
          <span className="text-amber-800">Sip</span>
        </h2>
      </Link>
      <p className="mt-2 text-gray-600 font-['Lato',sans-serif]">Your literary journey begins here</p>
    </div>
  );
};

export default AuthHeader;
