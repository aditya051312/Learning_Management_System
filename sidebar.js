import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
      <nav className="flex-1 px-2 py-4">
        <NavLink exact to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200" activeClassName="bg-gray-200">
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/courses" className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-200" activeClassName="bg-gray-200">
          <span>Courses</span>
        </NavLink>
        <NavLink to="/users" className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-200" activeClassName="bg-gray-200">
          <span>Users</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
