import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-2">Generation Thailand</h1>
        <h2 className="text-4xl font-bold text-black">React - Assessment</h2>
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
    </div>
  );
};

export default Home;