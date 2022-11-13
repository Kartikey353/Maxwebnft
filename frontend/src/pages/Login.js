import React, { useState } from 'react'
import goog from '../images/google.svg';
import git from '../images/github.svg';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { app } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { loginon, loginoff } from '../Actions';
import { useDispatch } from 'react-redux';
const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const dispatch = useDispatch();
    const handelemail = event => {
        setemail(event.target.value);
    }
    const handelpassword = event => {
        setpassword(event.target.value);
    }
    const authentication = getAuth(app);
    const provider = new GoogleAuthProvider();
    const loginwithgoogle = async (e) => {
        e.preventDefault();
        const result = await signInWithPopup(authentication, provider);

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }

        let username = result.user.email;
        username = username.replace("@gmail.com", "");
        console.log(username);

        let bodyContent = JSON.stringify({
            "userid": result.user.uid,
            "username": username,
            "name": result.user.displayName,
            "email": result.user.email,
            "metamaskwallet": false,
            "mobile": result.user.phoneNumber,
            "address": null,
            "artist": false,
            "photourl": result.user.photoURL
        });

        let response = await fetch("http://127.0.0.1:5001/maxnftwebapp/us-central1/app/api/createuser", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        dispatch(loginon(result.user.email));
        let data = await response.text();
        console.log(data);
        let item = result.user.uid;
        navigate('/userdashboard/' + item);
    }
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                navigate('/')
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
            })
    }
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (login) {
            navigate('/');
        }
    })
    return (
        <>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-black">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form>
                                <div className="glasseffect pt-[3vw] pb-[3vw] px-[3vw]">
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Email address"
                                            onChange={handelemail}
                                            value={email}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="password"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Password"
                                            onChange={handelpassword}
                                            value={password}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="form-group form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-500 checked:border-green-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                id="exampleCheck3"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label inline-block text-black"
                                                htmlFor="exampleCheck2"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <a
                                            href="#!"
                                            className="text-black hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        onClick={login}
                                    >
                                        Sign in
                                    </button>
                                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                        <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                    </div>
                                    <button
                                        className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                                        style={{ backgroundColor: "black" }}
                                        href="#!"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        onClick={loginwithgoogle}
                                    >
                                        <img className='w-[10vw] md:w-[3vw] px-2' src={goog} alt="-" />
                                        Continue with Google
                                    </button>
                                    <button
                                        className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                                        style={{
                                            backgroundColor: "white",
                                            color: "black"
                                        }}
                                        href="#!"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img className='w-[10vw] md:w-[3vw] px-2' src={git} alt="-" />
                                        Continue with Github
                                    </button>
                                    <Link to="/register">
                                        <p
                                            className="px-7 py-4 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 mt-3"
                                            style={{ backgroundColor: "black" }}
                                            href="#!"
                                            role="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Create Account
                                        </p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login;