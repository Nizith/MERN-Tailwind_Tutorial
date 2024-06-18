import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProfileUser() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        function ReadUsers() {
            axios.get("http://localhost:4600/user/read")
                .then((res) => {
                    setUsers(res.data);
                })
                .catch((err) => {
                    alert("user Fetching Failed!", err);
                })
        }
        ReadUsers();
    }, []);



    return (
        <div className="m-auto w-screen">
            {users.map((user) => (
                <div className="w-3/5 m-auto bg-slate-800 rounded-xl flex justify-between">

                    <div className="w-2/5 flex justify-center my-auto">
                        {user.userImage &&

                            <img src={`http://localhost:4600/user/uploads/${user.userImage}`}
                                className="h-96 rounded-full"
                                alt="User image" />
                        }
                    </div>

                    <form action="" className="w-3/5 px-10 py-5 text-neutral-200 text-start">
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Name: </label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900"
                                value={user.userName}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Email: </label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900"
                                value={user.userEmail}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Phone:</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900"
                                value={user.userPhone}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Gender:</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3 focus:bg-slate-900"
                                value={user.userGender}
                            />
                        </div>
                        <button type="submit" className="flex justify-center my-4 mt-7 ml-auto rounded-md py-1.5 px-4 text-md text-red-500 bg-slate-700 hover:outline outline-1 hover:outline-amber-300">Delete your profile</button>
                    </form>
                </div>

            ))}
        </div>
    )
}
