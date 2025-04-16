import React from 'react';
import { HiSearch } from 'react-icons/hi';

function UsersPanel({ users }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-xl font-['Playfair_Display',serif] font-semibold text-gray-800 mb-2 md:mb-0">Users Management</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search users..." 
              className="pl-10 pr-4 py-2 border border-amber-200 rounded focus:ring-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none"
            />
            <HiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
      </div>
      
      {/* Users Table */}
      <div className="bg-white rounded-lg overflow-hidden border border-amber-100">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-amber-100">
            <thead className="bg-amber-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">User</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Joined</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Reviews</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-amber-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-amber-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-gray-800">{user.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{user.joined}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{user.reviews}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-medium rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
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

export default UsersPanel;
