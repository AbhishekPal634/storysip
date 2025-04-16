import React from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <header className="bg-amber-800 text-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-['Playfair_Display',serif] font-bold">StorySip Admin</h1>
            <p className="text-amber-100">Manage your book platform</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-white hover:text-amber-200 transition">
              View Website
            </Link>
            <div className="h-4 w-px bg-amber-600"></div>
            <div className="flex items-center">
              <span className="text-sm font-medium">Admin User</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
