import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex-1 pt-16 mx-32">
            <div className="flex text-neutral-100 gap-16">
                <h1 className="text-xl font-bold px-5 py-2 bg-slate-800 rounded-md hover:bg-emerald-900 hover:duration-300">For You</h1>
                <div className="relative" onClick={toggleDropdown}>
                    <button className="flex text-xl bg-slate-800 rounded-md w-40 px-8 py-2 hover:bg-emerald-900 hover:duration-300 focus:bg-emerald-900" onClick={toggleDropdown} >
                        Sort By <IoMdArrowDropdown className="mt-1.5 ml-2" />
                    </button>
                    <div className={`absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-40 ${isOpen ? 'transition-all duration-300 opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        {isOpen && (
                            <>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-md">Newest</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Most Viewed</a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-md">Top rated</a>
                            </>
                        )}
                    </div>
                </div>
            </div>


            {/* Homepage content */}
            <div className="mt-14">
                <div className="grid grid-cols-4 gap-10">
                    <div >
                        <img className="rounded-md" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
                    </div>
                    <div >
                        <img className="rounded-md" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
                    </div>
                    <div >
                        <img className="rounded-md" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
                    </div>
                    <div >
                        <img className="rounded-md" src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
