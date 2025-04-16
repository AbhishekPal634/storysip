import React from 'react';
import { 
  HiBookOpen, 
  HiUserGroup, 
  HiChat 
} from 'react-icons/hi';

function AdminTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex border-b border-amber-100 mb-6">
      <button
        className={`py-3 px-6 font-medium focus:outline-none flex items-center ${activeTab === 'books' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-500 hover:text-gray-700'}`}
        onClick={() => setActiveTab('books')}
      >
        <HiBookOpen className="mr-2" /> Books
      </button>
      <button 
        className={`py-3 px-6 font-medium focus:outline-none flex items-center ${activeTab === 'users' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-500 hover:text-gray-700'}`}
        onClick={() => setActiveTab('users')}
      >
        <HiUserGroup className="mr-2" /> Users
      </button>
      <button 
        className={`py-3 px-6 font-medium focus:outline-none flex items-center ${activeTab === 'reviews' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-500 hover:text-gray-700'}`}
        onClick={() => setActiveTab('reviews')}
      >
        <HiChat className="mr-2" /> Reviews
      </button>
    </div>
  );
}

export default AdminTabs;
