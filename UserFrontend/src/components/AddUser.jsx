import React from "react";

export default function AddUser() {
    return (
        <div className="m-auto w-screen">
            <div className="w-5/12 m-auto bg-slate-800 py-5 px-8 rounded-2xl">
                <h1 className="text-3xl font-bold flex justify-center mb-4 text-amber-300">User Creation</h1>
                <form action="" className="text-neutral-200 text-start">
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-amber-300">Name: </label>
                        <input type="text" className="w-full h-8 rounded-md outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-amber-300">Email: </label>
                        <input type="text" placeholder="user@.gmail.com" className="w-full h-8 rounded-md outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-amber-300">Phone:</label>
                        <input type="text" className="w-full h-8 rounded-md outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-amber-300">Gender: </label>
                        <select name="" id="" className="w-full h-8 rounded-md outline outline-none bg-inherit border-r-4">
                            <option value="" className="bg-slate-800">Select your gender</option>
                            <option value="male" className="bg-slate-800">Male</option>
                            <option value="male" className="bg-slate-800">Female</option>
                            <option value="male" className="bg-slate-800">Prefer not to say</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-amber-300">Upload Image: </label>
                        <input type="file" className="w-full rounded-md h-8 bg-inherit  " />
                    </div>
                    <button type="submit" className="flex justify-center my-4 mx-auto rounded-md py-1.5 px-4 text-xl text-amber-300 bg-slate-700 hover:outline outline-1 hover:outline-amber-300">Create</button>
                </form>
            </div>
        </div>
    )
}
