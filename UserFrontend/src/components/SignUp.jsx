import React from "react";

export default function SignUp() {
    return (
        <div className=" h-screen flex justify-center">
            <div className="bg-slate-800 p-10 rounded-2xl mx-auto my-auto">
                <h1 className="font-bold text-amber-300 text-3xl flex justify-center -mt-6 mb-6">Register</h1>
                <form action="" className="text-amber-300 text-start text-lg">
                    <div className="mb-4">
                        <label htmlFor="userName" className="block mb-1.5">Username:</label>
                        <input type="text" className="w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900 "/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-1.5">Create Password</label>
                        <input type="password" className="w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="re-enter-password" className="block mb-1.5">Re-Enter-Password</label>
                        <input type="password" className="w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"/>
                    </div>
                    <button type="submit" className="bg-slate-700  px-5 py-1.5 mt-3 rounded-md text-amber-300 font-bold hover:outline outline-1">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
