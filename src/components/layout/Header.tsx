import React, { useEffect, useRef, useState } from 'react';

const Header = () => {

  return (
    <>
      <header className="bg-white flex border-b divide-inherit w-[calc(100%-270px)] h-[70px] max-h-[70px] fixed top-0">
          <div className='mt-3 mx-3 relative'>
            <input type="text" className='border-2 w-[400px] border-gray-200 px-5 py-2 rounded-xl' placeholder='Search course...' />
            <i className="lni lni-search-alt absolute right-3 top-3 cursor-pointer"></i>
          </div>
          <nav className="mx-auto w-full flex items-center px-4 py-3 flex flex-row justify-end" aria-label="Global">
              <div>
                <div className="cursor-pointer bg-slate-200 text-violet-600 ring-offset-2 hover:ring-2 hover:text-primary hover:bg-violet-50 ring-primary transition duration-300 uppercase w-[45px] h-[45px] rounded-full font-semibold flex items-center justify-center text-[18px]">
                 JD
                </div>
              </div>
          </nav>
      </header>
    </>
  );
};

export default Header;
