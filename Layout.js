import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className='flex'>
      <div className='w-1/4 h-screen bg-gray-800 text-white p-5'>
        <h1 className='text-2xl mb-5'>LMS Dashboard</h1>
        <ul>
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/courses'>Courses</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </div>
      <div className='w-3/4 p-5'>
        {children}
      </div>
    </div>
  );
}

export default Layout;