import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

export default function ProfileUser() {

    const { navigate } = useNavigate();

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

    function DeleteUser(userId) {
        axios.delete(`http://localhost:4600/user/delete/${userId}`)
            .then(() => {
                alert("User deleted!");
                navigate('/adduser')
            })
            .catch((err) => {
                alert("Deletion Failed!", err);
            })
    }




    const userId = useParams();
    const [userName, setUpdateUsername] = useState();
    const [userEmail, setUpdateUseremail] = useState();
    const [userPhone, setUpdateUserphone] = useState();
    const [userGender, setUpdateUsergender] = useState();
    const [userImage, setUpdateUserimage] = useState();

    useEffect(() => {
        axios.get(`http://localhost:4600/user/get/${userId}`)
            .then((res) => {
                setUpdateUsername(res.data);
                setUpdateUseremail(res.data);
                setUpdateUserphone(res.data);
                setUpdateUsergender(res.data);
                setUpdateUserimage(res.data);
            })
            .catch((err) => {
                alert("user details fetch failed!", err);
            })
    }, [userId])

    const SubmitUpdateUser = (u) => {
        u.preventDefault();

        const updateduser = {
            userName,
            userEmail,
            userPhone,
            userGender,
            userImage,
        }

        axios.put(`http://localhost:4600/user/update/${userId}`, updateduser)
            .then(() => {
                alert("User updated successfully!");
            })
            .catch((err) => {
                alert("User updation failed!", err);
            })
    }

    const [isNameDisabled, setIsNameDisabled] = useState(true);
    const [isEmailDisabled, setIsEmailDisabled] = useState(true);
    const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
    const [isGenderDisabled, setIsGenderDisabled] = useState(true);

    const enableEdit = (e, field) => {
        e.preventDefault();

        switch (field) {
            case "name":
                setIsNameDisabled(false);
                break;
            case "email":
                setIsEmailDisabled(false);
                break;
            case "phone":
                setIsPhoneDisabled(false);
                break;
            case "gender":
                setIsGenderDisabled(false);
                break;
            default:
                break;
        }
    };

    return (
        <div className="m-auto w-screen">
            {users.map((user) => (
                <div key={user._id} className="w-3/5 m-auto bg-slate-800 rounded-xl flex justify-between">

                    <div className="w-2/5 flex justify-center my-auto">
                        {user.userImage &&

                            <img src={`http://localhost:4600/user/uploads/${user.userImage}`}
                                className="h-96 rounded-2xl"
                                alt="User image" />
                        }
                    </div>

                    <form action="" className="w-3/5 px-10 py-5 text-neutral-200 text-start" onSubmit={SubmitUpdateUser}>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Name: {" "}</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={user.userName}
                                disabled={isNameDisabled}
                                onChange={(u) => {setUpdateUsername(u.target.value)}}
                            />
                            <button className="absolute -ml-6 mt-1" onClick={(e) => enableEdit(e, "name")}>
                                <MdOutlineModeEdit className="size-5 text-amber-300" />
                            </button>
                        </div>


                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Email: {" "}</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={user.userEmail}
                                disabled={isEmailDisabled}
                                onChange={(u) => {setUpdateUseremail(u.target.value)}}
                            />
                            <button className="absolute -ml-6 mt-1" onClick={(e) => enableEdit(e, "email")}>
                                <MdOutlineModeEdit className="size-5 text-amber-300" />
                            </button>
                        </div>


                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Phone: {" "}</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={user.userPhone}
                                disabled={isPhoneDisabled}
                                onChange={(u) => {setUpdateUserphone(u.target.value)}}
                            />
                            <button className="absolute -ml-6 mt-1" onClick={(e) => enableEdit(e, "phone")}>
                                <MdOutlineModeEdit className="size-5 text-amber-300" />
                            </button>
                        </div>


                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-amber-300">Gender: {" "}</label>
                            <input
                                type="text"
                                className="w-full h-8 outline outline-none bg-inherit border-b-2 ps-3"
                                value={user.userGender}
                                disabled={isGenderDisabled}
                                onChange={(u) => {setUpdateUsergender(u.target.value)}}
                            />
                            <button className="absolute -ml-6 mt-1" onClick={(e) => enableEdit(e, "gender")}>
                                <MdOutlineModeEdit className="size-5 text-amber-300" />
                            </button>
                        </div>


                        <div className="flex justify-between">
                            <button type="submit" className="mt-3" >
                                <MdFileDownloadDone  className="size-10 text-amber-300"/>
                            </button>
                            <button
                                className="flex justify-center my-4 mt-7 ml-auto rounded-md py-1.5 px-4 text-md text-red-500 font-semibold bg-slate-700 hover:outline outline-1 hover:outline-amber-300"
                                onClick={() => (DeleteUser(user._id))}>
                                Delete your profile
                            </button>
                        </div>
                    </form>
                </div>

            ))}
        </div>
    )
}
