import React from 'react';
import { Link } from 'react-router-dom';

const UserView = ({ employees }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-semibold text-gray-800 mb-6 text-center">Generation Thailand</h1>
      <h1 className="text-5xl font-semibold text-gray-800 mb-6 text-center">Home - User View</h1>
      
      <div className="flex justify-center gap-4 mb-8">
        <Link to="/user" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          User Home View
        </Link>
        <Link to="/admin" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 transition-colors">
          Admin Home View
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="divide-y divide-gray-200 w-full border-collapse ">
          <thead className="bg-gray-50">
            <tr class="bg-gray-100">
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid">Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid">Last Name</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid">Position</th>
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