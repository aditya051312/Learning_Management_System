import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({children}: any) => {
    return(
        <section>
                <div className="overflow-hidden">
                    <div className="flex">
                        <Sidebar />
                        <div className="relative flex h-full max-w-full flex-1 flex-col">
                            <Header />
                            <div className='p-5 bg-[#f3f6f8] mt-[70px] h-[calc(100vh-70px)] max-h-[calc(100vh-70px)] overflow-auto'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Layout;