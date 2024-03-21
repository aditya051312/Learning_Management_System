import React from "react";
import { userList } from "../../utils/users";

const UserList = () => {
    const users = userList;

    return(
        <section className="w-full">
             <div>
                <h2 className='font-semibold'>Users</h2>
                <div className='text-gray-400 text-sm'>Users {'>'} Users list</div>
            </div>
            <div className="w-full bg-white p-4 mt-3 rounded-lg">
                <table className="w-full">
                    <thead>
                        <tr>
                            <td className="border-b-2 text-primary font-semibold border-slate-200 px-3 py-3">User Name</td>
                            <td className="border-b-2 text-primary font-semibold border-slate-200 px-3 py-2">Email</td>
                            <td className="border-b-2 text-primary font-semibold border-slate-200 px-3 py-2">Phone</td>
                            <td className="border-b-2 text-primary font-semibold border-slate-200 px-3 py-2">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user: any) => (
                            <tr>
                                <td className="border-b border-slate-200 px-3 py-3">{user?.name}</td>
                                <td className="border-b border-slate-200 px-3 py-3">{user?.email}</td>
                                <td className="border-b border-slate-200 px-3 py-3">{user?.phoneno}</td>
                                <td className="border-b border-slate-200 px-3 py-3">
                                    <span className={` px-3 py-1 rounded-md text-sm font-semibold ${user?.status == 'ACTIVE'? 'bg-green-100 text-green-600':'bg-red-100 text-red-600'}`}>{user?.status}</span>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </section>
    )
};

export default UserList;