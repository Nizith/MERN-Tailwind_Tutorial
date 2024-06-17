import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignIn() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().email("Invalid email address*").required("Required*"),
            password: Yup.string().min(8, "Password should have at least 8 characters*").max(40, "Password should have at most 40 characters*").required("Required*"),
        }),
        
        onSubmit: (values, { setSubmitting }) => {
            const { username, password } = values;

            axios.post('http://localhost:4600/user/signIn', { username, password })
                .then(() => {
                    alert("User signed in successfully");
                    navigate('/adduser');
                })
                .catch((err) => {
                    console.error(err);
                    alert("Sign in failed. Please check your credentials and try again.");
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    });

    return (
        <div className="m-auto w-screen">
            <div className="w-1/3 bg-slate-800 p-10 rounded-2xl m-auto">
                <h1 className="font-bold text-amber-300 text-3xl flex justify-center -mt-6 mb-6">Log In</h1>
                <form onSubmit={formik.handleSubmit} className="text-amber-300 text-start">
                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-1.5">Username :</label>
                        <input
                            id="username"
                            type="text"
                            className="w-full outline-0 bg-inherit border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-800"
                            {...formik.getFieldProps('username')}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500">{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1.5">Password :</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full outline-0 bg-inherit border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="bg-slate-700 px-5 py-1.5 mt-3 rounded-md text-amber-300 font-bold hover:outline outline-1" disabled={formik.isSubmitting}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
