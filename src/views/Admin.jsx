import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminView = ({ employees, onAddEmployee, onDeleteEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    position: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.lastname && formData.position) {
      onAddEmployee(formData);
      setFormData({ name: '', lastname: '', position: '' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Generation Thailand Home - Admin View</h1>
      
      <div className="flex justify-center gap-4 mb-8">
        <Link to="/user" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          User Home View
        </Link>
        <Link to="/admin" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
          Admin Home View
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Create User Here</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position:</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
          </div>
          <button 
            type="submit" 
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-800 p-6 pb-0">Table 1</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid">Last Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-2 border-solid">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees && employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-solid">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-solid">{employee.lastname}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-2 border-solid">{employee.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium border-2 border-solid">
                    <button
                      onClick={() => onDeleteEmployee(employee.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
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

export default AdminView;