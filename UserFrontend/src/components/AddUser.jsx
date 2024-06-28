import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function AddUser() {

    const navigate = useNavigate();

    const [userName, setUsername] = useState();
    const [userEmail, setUseremail] = useState();
    const [userPhone, setUserphone] = useState();
    const [userGender, setUsergender] = useState();
    const [userImage, setUserimage] = useState();

    const SubmitAdduser = (a) => {
        a.preventDefault();

        const formData = new FormData();
        formData.append("userName", userName);
        formData.append("userEmail", userEmail);
        formData.append("userPhone", userPhone);
        formData.append("userGender", userGender);
        formData.append("userImage", userImage);

        axios.post("http://localhost:4600/user/create", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then(() => {
            toast.success("User Created Successfully!", {
                duration: 4000
            });
            navigate('/profile');
        }).catch((err) => {
            console.log("Adding use is failed :- ", err);
            toast.error("User Creaton Failed!");
        })
    }

    return (
        <>
        <Toaster/>
            <div className="m-auto w-screen">
                <div className="w-5/12 m-auto bg-slate-800 py-5 px-8 rounded-2xl">
                    <h1 className="text-3xl font-bold flex justify-center mb-4 text-amber-300">User Creation</h1>
                    <form action="" className="text-neutral-200 text-start" onSubmit={SubmitAdduser}>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Name: </label>
                            <input
                                type="text"
                                className="w-full h-8 rounded-md outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900"
                                onChange={(a) => { setUsername(a.target.value) }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Email: </label>
                            <input
                                type="text"
                                placeholder="user@.gmail.com"
                                className="w-full h-8 rounded-md outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900"
                                onChange={(a) => { setUseremail(a.target.value) }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Phone:</label>
                            <input
                                type="text"
                                className="w-full h-8 rounded-md outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900"
                                onChange={(a) => { setUserphone(a.target.value) }} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Gender: </label>
                            <select
                                name=""
                                id=""
                                className="w-full h-8 rounded-md outline outline-none bg-inherit border-r-8"
                                onChange={(a) => { setUsergender(a.target.value) }}>

                                <option value="" className="bg-slate-800">Select your gender</option>
                                <option value="male" className="bg-slate-800">Male</option>
                                <option value="male" className="bg-slate-800">Female</option>
                                <option value="male" className="bg-slate-800">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Upload Image: </label>
                            <input
                                type="file"
                                className="w-full rounded-lg h-8 bg-inherit  "
                                onChange={(a) => { setUserimage(a.target.files[0]) }} />
                        </div>
                        <button type="submit" className="flex justify-center my-4 mx-auto rounded-md py-1.5 px-4 text-xl text-amber-300 bg-slate-700 hover:outline outline-1 hover:outline-amber-300">Create The User</button>
                    </form>
                </div>
            </div>
        </>
    )
}
