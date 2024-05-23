import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');

    const submitUserSignup = (t) => {
        t.preventDefault();

        if (password !== reEnterPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        const newUser = ({
            username,
            password,
        });


        axios.post("http://localhost:6000/user/signUp", newUser)
            .then(() => {
                alert("User signed up successfully");
            })
            .catch((err) => {
                alert("User signup failed.");
                console.error(err);
            })
    }


    return (
        <div className=" h-screen flex justify-center">
            <div className="bg-slate-800 p-10 rounded-2xl mx-auto my-auto">
                <h1 className="font-bold text-amber-300 text-3xl flex justify-center -mt-6 mb-6">Register</h1>
                <form onSubmit={submitUserSignup} className="text-amber-300 text-start text-lg">
                    <div className="mb-5">
                        <label htmlFor="userName" className="block mb-1.5">Username :</label>
                        <input
                            type="text"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900 "
                            onChange={(t) => { setUsername(t.target.value)}} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1.5">Create Password :</label>
                        <input
                            type="password"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            onChange={(t) => { setPassword(t.target.value)}} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="reEnterPassword" className="block mb-1.5">Re-Enter-Password :</label>
                        <input
                            type="password"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            onChange={(t) => { setReEnterPassword(t.target.value)}} />
                    </div>
                    <button type="submit" className="bg-slate-700  px-5 py-1.5 mt-3 rounded-md text-amber-300 font-bold hover:outline outline-1">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
