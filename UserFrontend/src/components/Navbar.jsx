import React from "react";

export default function Navbar() {
  return (
    <div>
      <div>
        <div className="py-4 text-center text-emerald-800 font-extrabold text-5xl">
          <h1>𝓟𝓘𝓒𝓣𝓞𝓡𝓘𝓐</h1>
        </div>
        <div>
          <ul className="flex justify-center gap-10 font-bold text-emerald-800">
            <li className="bg-neutral-300 py-3 px-6 rounded-3xl"><a href="">Explore</a></li>
            <li className="rounded-3xl">
              <div>
                <input type="search"  className="bg-neutral-300 rounded-3xl py-3 px-60" />Search
              </div>
            </li>
            <li className="bg-neutral-300 py-3 px-6 rounded-3xl"><a href="">Join Us</a></li>
            <li className="bg-emerald-800 py-3 px-6 rounded-3xl text-neutral-100"><a href="">Log In</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
