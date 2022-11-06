import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { app } from "../firebase-config";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
const Registration = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handelemail = event => {
        setemail(event.target.value);
    }
    const handelpassword = event => {
        setpassword(event.target.value);
    }
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        const authentication = getAuth();
        createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                navigate('/login');
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black glasseffect specialfont">
            <div className="px-8 py-6 mx-4 mt-4 text-left   shadow-xl md:w-1/3 lg:w-1/3 sm:w-1/3">
                <div className="flex justify-center">
                </div>
                <h3 className="text-2xl font-bold text-center">Join us</h3>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="Name">
                                Name
                                <label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    />
                                </label>
                            </label>
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="email">
                                Email
                                <label>
                                    <input
                                        onChange={handelemail}
                                        value={email}
                                        type="text"
                                        placeholder="Email"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    />
                                </label>
                            </label>
                        </div>
                        <div className="mt-4">
                            <label className="block">
                                Password
                                <label>
                                    <input
                                        onChange={handelpassword}
                                        value={password}
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    />
                                </label>
                            </label>
                        </div>
                        <div className="mt-4">
                            <label className="block">
                                Confirm Password
                                <label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    />
                                </label>
                            </label>
                        </div>
                        <span className="text-xs text-red-400">Password must be same!</span>
                        <div className="flex">
                            <button onClick={register} className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-black">
                                Create Account
                            </button>
                        </div>
                        <div className="mt-6 text-grey-dark">
                            Already have an account?
                            <Link to="/login">
                                <p className="text-blue-600 hover:underline" href="#">
                                    Log in
                                </p>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Registration