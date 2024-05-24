import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const retrieveUser = (r) => {
        r.preventDefault();


        const Users = {
            username,
            password,
        }

        axios.post('http://localhost:4600/user/signIn', Users)
            .then(() => {
                alert("User signed in succcessfully");
                navigate('/profile');
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className=" h-screen flex justify-center">
            <div className="bg-slate-800 p-10 rounded-2xl mx-auto my-auto">
                <h1 className="font-bold text-amber-300 text-3xl flex justify-center -mt-6 mb-6">Log In</h1>
                <form onSubmit={retrieveUser} className="text-amber-300 text-start text-lg">
                    <div className="mb-5">
                        <label htmlFor="userName" className="block mb-1.5">Username :</label>
                        <input
                            type="text"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900 "
                            onChange={(c) => {setUsername(c.target.value)}}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1.5">Password :</label>
                        <input
                            type="password"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            onChange={(c) => { setPassword(c.target.value)}}/>
                    </div>
                    <button type="submit" className="bg-slate-700  px-5 py-1.5 mt-3 rounded-md text-amber-300 font-bold hover:outline outline-1">Sign In</button>
                </form>
            </div>
        </div>
    )
}
