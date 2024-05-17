import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex-1 pt-40 pb-24 mx-32">
            <div className="flex text-neutral-100 gap-8">
                <h1 className="text-2xl font-bold">For You</h1>
                <div className="flex gap-5 mt-1 ml-10">
                    <button className="text-xl">Filter</button>
                    <div className="relative">
                        <button className="flex items-center text-xl" onClick={toggleDropdown}>
                            Sort By <IoMdArrowDropdown className="mt-1.5 ml-2" />
                        </button>
                        <div className={`absolute mt-2 bg-white border border-gray-300 rounded-sm shadow-lg w-40 ${isOpen ? 'transition-all duration-300 opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            {isOpen && (
                                <>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Newest</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Most Viewed</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Top rated</a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
