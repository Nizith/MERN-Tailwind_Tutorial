import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function SignUp() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            reEnterPassword: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().email("Invalid email address*").required("Required*"),
            password: Yup.string().min(8, "Password should have at least 8 characters*").max(40, "Password should have at most 40 characters*").required("Required*"),
            reEnterPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match*')
                .required("Required*")
        }),
        onSubmit: (values, { setSubmitting }) => {
            const { username, password } = values;
            const newUser = { username, password };

            axios.post("http://localhost:4600/user/signUp", newUser)
                .then(() => {
                    alert("User signed up successfully");
                })
                .catch((err) => {
                    alert("User signup failed.");
                    console.error(err);
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    });

    return (
        <div className="h-screen flex justify-center">
            <div className="bg-slate-800 p-10 rounded-2xl mx-auto my-auto">
                <h1 className="font-bold text-amber-300 text-3xl flex justify-center -mt-6 mb-6">Register</h1>
                <form onSubmit={formik.handleSubmit} className="text-amber-300 text-start">
                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-1.5">Username :</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="username@gmail.com"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            {...formik.getFieldProps('username')}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500">{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1.5">Create Password :</label>
                        <input
                            id="password"
                            type="password"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="reEnterPassword" className="block mb-1.5">Re-Enter Password :</label>
                        <input
                            id="reEnterPassword"
                            type="password"
                            className="text-neutral-200 w-96 outline-0 bg-slate-800 border-b-2 rounded-md h-10 ps-3 border-neutral-200 focus:bg-slate-900"
                            {...formik.getFieldProps('reEnterPassword')}
                        />
                        {formik.touched.reEnterPassword && formik.errors.reEnterPassword ? (
                            <div className="text-red-500">{formik.errors.reEnterPassword}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="bg-slate-700 px-5 py-1.5 mt-3 rounded-md text-amber-300 font-bold hover:outline outline-1" disabled={formik.isSubmitting}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
