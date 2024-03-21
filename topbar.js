import React from 'react';

const TopBar = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-white border-b-4 border-indigo-500">
      <div className="flex items-center">
        <span className="text-2xl font-semibold text-gray-800">LMS Dashboard</span>
      </div>
    </header>
  );
};

export default TopBar;
