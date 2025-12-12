import React from 'react';
import { Link } from 'react-router-dom';

const UserView = ({ employees }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Generation Thailand</h1>
        <h2 className="text-4xl font-bold text-black">Home - User View</h2>
      </div>

      <div className="flex justify-center gap-12 mb-12">
        <Link
          to="/user"
          className="bg-white text-gray-900 font-bold py-4 px-8 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          User Home View
        </Link>
        <Link
          to="/admin"
          className="bg-white text-gray-900 font-bold py-4 px-8 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          Admin Home View
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="divide-y divide-gray-200 w-full border-collapse ">
          <thead>
            <tr class="bg-gray-100">
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200">Name</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200">Last Name</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200">Position</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees && employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50 border-b">
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900 border-2 border-solid">{employee.name}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900 border-2 border-solid">{employee.lastname}</td>
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-900 border-2 border-solid">{employee.position}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserView;