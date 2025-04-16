import React from 'react';

const AuthTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex">
      <button
        className={`w-1/2 py-4 text-sm font-medium ${
          activeTab === 'login'
            ? 'text-amber-800 border-b-2 border-amber-800'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => setActiveTab('login')}
      >
        Log In
      </button>
      <button
        className={`w-1/2 py-4 text-sm font-medium ${
          activeTab === 'signup'
            ? 'text-amber-800 border-b-2 border-amber-800'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={() => setActiveTab('signup')}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthTabs;
