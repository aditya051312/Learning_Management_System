import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    useEffect(() => {
        console.log(currentPath);
    }, [currentPath])

    return (
        <div className="w-[270px] sidebar bg-sidebar min-h-screen h-[100vh] border-e divide-inherit">
            <div className='px-6 py-4 flex border-b'>
                <div><span className='text-[26px] font-[700] text-primary'>LMS</span></div>
            </div>
            <div className='px-4 py-3' style={{ height: 'calc(100vh - 72px)', overflow: 'auto' }}>
                <p className='text-[12px] mt-2 font-medium mb-3 text-gray-500 mx-3'>NAVIGATION</p>
                <ul>
                    <li>
                        <NavLink to={'/dashboard'}>
                            <div className={`cursor-pointer mb-2 group transition duration-150 ease-in hover:bg-primary rounded-lg px-4 py-3 ${currentPath === '/dashboard'? 'bg-primary':''}`}>
                                <div className={`font-medium transition duration-150 group-hover:text-white ${currentPath === '/dashboard'? 'text-white':''}`}><i className="lni lni-home me-1 font-bold"></i> Dashboard</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/courses'}>
                            <div className={`cursor-pointer mb-2 group transition duration-150 ease-in hover:bg-primary rounded-lg px-4 py-3 ${currentPath === '/courses'? 'bg-primary':''}`}>
                                <div className={`font-medium transition duration-150 group-hover:text-white ${currentPath === '/courses'? 'text-white':''}`}><i className="lni lni-layers me-1 font-bold"></i> Courses</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/users'}>
                            <div className={`cursor-pointer mb-2 group transition duration-150 ease-in hover:bg-primary rounded-lg px-4 py-3 ${currentPath === '/users'? 'bg-primary':''}`}>
                                <div className={`font-medium transition duration-150 group-hover:text-white ${currentPath === '/users'? 'text-white':''}`}><i className="lni lni-user me-1 font-bold"></i> Users</div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
