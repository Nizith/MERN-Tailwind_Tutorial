import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full">
      <div>
        <div className="py-4 text-center text-emerald-800 font-extrabold text-5xl">
          <h1>𝓟𝓘𝓒𝓣𝓞𝓡𝓘𝓐</h1>
        </div>
        <div>
          <ul className="flex justify-center gap-10 font-bold text-emerald-800">
            <li className="bg-neutral-300 py-3 px-6 rounded-3xl hover:bg-emerald-800 hover:text-neutral-100 hover:duration-300"><a href="">Explore</a></li>
            <li className="rounded-3xl">
              <div className="flex relative">
                <input type="search"  className="bg-neutral-300 rounded-3xl py-3 ps-5 focus:outline focus: outline-emerald-700" placeholder="Search images..." style={{width: '8in', outlineWidth: '4px'}} />
                <div className="right-6 self-center absolute"><button className="text-2xl pt-1"><FaSearch /></button></div>
              </div>
            </li>
            <li className="bg-neutral-300 py-3 px-6 rounded-3xl hover:bg-emerald-800 hover:text-neutral-100 hover:duration-300"><a href="">Join Us</a></li>
            <li className="bg-emerald-800 py-3 px-6 rounded-3xl text-neutral-100"><a href="">Log In</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
