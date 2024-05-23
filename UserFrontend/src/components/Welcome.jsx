import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {

    const navigate  = useNavigate();

    return (
        <div className="h-screen flex justify-start">
            <div className="bg-slate-800 rounded-2xl mx-auto my-auto px-60 py-10">
                <h1 className="text-neutral-200 font-mono text-4xl mb-10">Welcome to the User Management!!!!</h1>
                <button
                    onClick={() => navigate('/signup')}
                    className="bg-slate-700 mx-auto px-10 py-3 mt-3 rounded-md text-amber-300 font-bold hover:outline outline-1 flex justify-center text-2xl">
                    Sign Yourself Up
                </button>
            </div>
        </div>
    )
}
