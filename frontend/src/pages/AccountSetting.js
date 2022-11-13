import React from 'react'
import Footer from '../Components/Footer'
import Navbar2 from '../Components/Navbar2'
import nft from '../images/nft1.png'
const AccountSetting = () => {
    return (
        <>
            <div className="top-0 fixed">
                <Navbar2 />
            </div>
            <div className="pt-2 font-mono w-auto h-auto mt-14">
                <div className="container mx-auto">
                    <div className="inputs w-full max-w-2xl p-6 mx-auto">
                        <h1 className=" text-orange-500 text-4xl myfont font-bold text-center  before:absolute 
                before:rounded-lg before:content-around before:w-40 before:h-1 before:top-[132px] before: before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 before:-z-10">Account Details</h1>
                        <div className="w-full md:w-full px-3 mb-6 mt-5">
                            <img className='flex w-28 mx-auto object-cover rounded-full' src={nft} alt="" />
                        </div>
                        <form className="mt-6 pt-4 flex">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-white text-xl font-bold mb-2"
                                        htmlFor="grid-text-1"
                                    >
                                        username
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                        id="grid-text-1"
                                        type="text"
                                        placeholder="k"
                                        disabled
                                    />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-white text-xl font-bold mb-2"
                                        htmlFor="grid-text-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                        id="grid-text-1"
                                        type="text"
                                        placeholder="Enter email"
                                        required=""
                                    />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label
                                        className="block uppercase tracking-wide text-white text-xl font-bold mb-2"
                                        htmlFor="grid-text-1"
                                    >
                                        Mobile Number
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                        id="grid-text-1"
                                        type="mobile"
                                        placeholder="Enter email"
                                        required=""
                                    />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6 ">
                                    <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2">
                                        password
                                    </label>
                                    <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                                        change your password
                                    </button>
                                </div>
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2">
                                        pick your country
                                    </label>
                                    <div className="flex-shrink w-full inline-block">
                                        <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                            <option>choose ...</option>
                                            <option>USA</option>
                                            <option>France</option>
                                            <option>Spain</option>
                                            <option>UK</option>
                                        </select>
                                        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                            <svg
                                                className="fill-current h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="personal w-full border-t border-gray-400 pt-4">
                                    <h2 className="text-2xl text-black myfont">Personal info:</h2>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                first name
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                type="text"
                                                required=""
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                last name
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                type="text"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-full px-3 mb-6">
                                        <label
                                            className="block uppercase tracking-wide text-white text-xl font-bold mb-2"
                                            htmlFor="grid-text-1"
                                        >
                                            Address
                                        </label>
                                        <input
                                            className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                            id="grid-text-1"
                                            type="text"
                                            placeholder="Full address"
                                            required=""
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            className="appearance-none bg-orange-500 text-black font-bold text-xl  px-2 py-1 shadow-sm border border-orange-500 rounded-md mr-3"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountSetting;