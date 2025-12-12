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
    <div className="w-full max-w-6xl mx-auto px-4 py-12 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Generation Thailand</h1>
        <h2 className="text-4xl font-bold text-black">Home - Admin View</h2>
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

      {/* Create User Form Section */}
      <div className="w-full mb-12">
        <h2 className="text-xl font-bold text-black mb-4">Create User Here</h2>

        {/* Updated Form Layout: Flexbox ensures single row alignment */}
        <form onSubmit={handleSubmit} className="flex sm:flex-row gap-4 w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Name"
            className="flex-1 px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
            placeholder="Last Name"
            className="flex-1 px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            required
            placeholder="Position"
            className="flex-1 px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-10 py-2 bg-[#6366f1] text-white font-medium rounded hover:bg-[#5558dd] transition-colors whitespace-nowrap"
          >
            Save
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="w-full">
        <div className="text-gray-400 text-sm mb-2 ml-1">Table 1</div>
        <div className="bg-white rounded overflow-hidden">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200">Name</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200">Last Name</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200">Position</th>
                <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees && employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50 bg-white">
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">{employee.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">{employee.lastname}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 border border-gray-200">{employee.position}</td>
                    <td className="px-6 py-4 text-sm text-center border border-gray-200">
                      <button
                        onClick={() => onDeleteEmployee(employee.id)}
                        className="text-red-500 font-bold hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-gray-500 border border-gray-200">
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminView;