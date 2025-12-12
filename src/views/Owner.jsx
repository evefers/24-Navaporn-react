import React from 'react';
import { Link } from 'react-router-dom';

const Owner = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8 text-center">

          <h1 className="text-2xl font-bold text-gray-800 mb-2">24 Navaporn (Eve) #JSD11</h1>
          <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto mb-6">
            <img src={"../public/cat.jpg"} alt="cat" width="500" height="600" />
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 max-w-2xl mx-auto">
            <h2 className="text-xl text-gray-800 mb-4">Short Biography:</h2>
            <p className="text-black leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;