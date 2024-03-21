import React from 'react';
import TopBar from './topbar';
import SideBar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <SideBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex flex-col flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
