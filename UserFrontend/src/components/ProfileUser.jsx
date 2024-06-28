import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineModeEdit, MdFileDownloadDone } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";

function ReadOperation({ details, onEdit }) {
    return (
        <>
            {details.map((user) => (
                <div key={user._id} className="w-3/5 m-auto bg-slate-800 rounded-xl flex justify-between">

                    <div className="w-2/5 flex justify-center my-auto">
                        {user.userImage &&

                            <img src={`http://localhost:4600/user/uploads/${user.userImage}`}
                                className="h-96 rounded-2xl"
                                alt="User image" />
                        }
                    </div>

                    <div className="w-3/5 px-10 py-5 text-neutral-200 text-start">
                        <div className="mb-4">
                            <label htmlFor="userName" className="block mb-2 text-amber-300">Name: {" "}</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={user.userName}
                                readOnly
                            />
                            <button className="absolute -ml-6 mt-1" onClick={() => onEdit(user._id)}>
                                <MdOutlineModeEdit className="size-5 text-amber-300" />
                            </button>
                        </div>


                        <div className="mb-4">
                            <label htmlFor="userEmail" className="block mb-2 text-amber-300">Email: {" "}</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={user.userEmail}
                                readOnly
                            />
                            <button className="absolute -ml-6 mt-1" onClick={() => onEdit(user._id)}>
                                <MdOutlineModeEdit className="size-5 text-amber-300" />
                            </button>
                        </div>


                        <div className="mb-4">
                            <label htmlFor="userPhone" className="block mb-2 text-amber-300">Phone: {" "}</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={user.userPhone}
                                readOnly
                            />
                            <button className="absolute -ml-6 mt-1" onClick={() => onEdit(user._id)}>
                                <MdOutlineModeEdit className="size-5 text-amber-300" />
                            </button>
                        </div>


                        <div className="mb-4">
                            <label htmlFor="userGender" className="block mb-2 text-amber-300">Gender: {" "}</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={user.userGender}
                                readOnly
                            />
                            <button className="absolute -ml-6 mt-1" onClick={() => onEdit(user._id)}>
                                <MdOutlineModeEdit className="size-5 text-amber-300" />
                            </button>
                        </div>


                        <div className="flex justify-between">
                            <button
                                className="flex justify-center my-4 mt-7 ml-auto rounded-md py-1.5 px-4 text-md text-red-500 font-semibold bg-slate-700 hover:outline outline-1 hover:outline-amber-300"
                                onClick={() => (DeleteUser(user._id))}>
                                Delete your profile
                            </button>
                        </div>
                    </div>
                </div>

            ))}
        </>
    );
}

function UpdateOperation({ user }) {
    const navigate = useNavigate();
    const [userName, setUpdateUsername] = useState(user.userName);
    const [userEmail, setUpdateUseremail] = useState(user.userEmail);
    const [userPhone, setUpdateUserphone] = useState(user.userPhone);
    const [userGender, setUpdateUsergender] = useState(user.userGender);
    const [userImage, setUpdateUserimage] = useState(null);

    const SubmitUpdateUser = (e) => {
        e.preventDefault();

        const formUpdateData = new FormData();
        formUpdateData.append("userName", userName);
        formUpdateData.append("userEmail", userEmail);
        formUpdateData.append("userPhone", userPhone);
        formUpdateData.append("userGender", userGender);
        formUpdateData.append("userImage", userImage);

        axios.put(`http://localhost:4600/user/update/${user._id}`, formUpdateData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(() => {
            alert("User updated successfully!");
            navigate(`/profile/${user._id}`);
        }).catch((err) => {
            alert("User updation failed!", err);
        });
    };

    const [uploadImageName, setUploadimagename] = useState("No file selected.");

    return (
        <>
            <div className="w-3/5 m-auto bg-slate-800 rounded-xl flex justify-between">

                <form action="" className="w-full px-10 py-5 text-neutral-200 text-start" onSubmit={SubmitUpdateUser}>


                    <span className="text-amber-300 font-bold">{uploadImageName}</span>
                    <div
                        style={{ height: '3.8in' }}
                        className="w-3/12 mt-3 absolute border-4 border-dashed rounded-lg border-amber-400 flex items-center justify-center"
                        onClick={() => document.querySelector(".img-upload").click()}>

                        <label htmlFor="userImage" className="flex flex-col items-center justify-center text-amber-300 text-2xl font-bold"><LuUpload className="absolute -mt-32 size-20" />Upload Here </label>
                        <input
                            hidden
                            accept="image/*"
                            type="file"
                            className="img-upload h-96 rounded-2xl"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setUpdateUserimage(file);
                                    setUploadimagename(file.name);
                                }
                            }}
                        />
                    </div>


                    <div className="w-6/12 ml-auto">
                        <div className="mb-4">
                            <label htmlFor="userName" className="block mb-2 text-amber-300">Name: </label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={userName}
                                onChange={(e) => setUpdateUsername(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="userEmail" className="block mb-2 text-amber-300">Email: </label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={userEmail}
                                onChange={(e) => setUpdateUseremail(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="userPhone" className="block mb-2 text-amber-300">Phone: </label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={userPhone}
                                onChange={(e) => setUpdateUserphone(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="userGender" className="block mb-2 text-amber-300">Gender: </label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={userGender}
                                onChange={(e) => setUpdateUsergender(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-between">
                            <button type="submit" className="mt-3">
                                <MdFileDownloadDone className="size-10 text-amber-300" />
                            </button>
                            <button
                                className="flex justify-center my-4 mt-7 ml-auto rounded-md py-1.5 px-4 text-md text-red-500 font-semibold bg-slate-700 hover:outline outline-1 hover:outline-amber-300"
                                onClick={() => navigate(`/profile`)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default function ProfileUser() {
    const { userId } = useParams();
    const navigate = useNavigate(); // <--- Define navigate here
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        if (!userId) {
            console.log("Fetching all users");
            axios.get("http://localhost:4600/user/read")
                .then((res) => {
                    setUsers(res.data);
                    console.log("Users fetched: ", res.data);
                })
                .catch((err) => {
                    console.error("User fetching failed!", err);
                });
        } else {
            console.log("Fetching user with ID:", userId);
            axios.get(`http://localhost:4600/user/get/${userId}`)
                .then((res) => {
                    if (res.data) {
                        setSelectedUser(res.data);
                        console.log("User fetched: ", res.data);
                    } else {
                        console.error("User fetching failed, no data found!");
                    }
                })
                .catch((err) => {
                    console.error("User fetching failed!", err);
                });
        }
    }, [userId]);

    const handleEdit = (id) => {
        navigate(`/profile/${id}`);
    };

    return (
        <div className="m-auto w-screen">
            {userId ? (
                selectedUser ? (
                    <UpdateOperation user={selectedUser} />
                ) : (
                    <p>Loading...</p>
                )
            ) : (
                <ReadOperation details={users} onEdit={handleEdit} />
            )}
        </div>
    );
}
