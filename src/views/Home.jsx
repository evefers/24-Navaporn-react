import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Generation Thailand</h1>
        <h2 className="text-4xl font-bold text-black">React - Assessment</h2>
      </div>

      <div className="flex sm:flex-row gap-4">
        <Link 
          to="/user" 
          className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-center"
        >
          User Home View
        </Link>
        <Link 
          to="/admin" 
          className="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-center"
        >
          Admin Home View
        </Link>
      </div>
    </div>
  );
};

export default Home;