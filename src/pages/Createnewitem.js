import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Navbar2 from '../Components/Navbar2';
import { MdAdd, MdDelete, MdCloudUpload } from 'react-icons/md';
import { GiMoneyStack } from "react-icons/gi";
import Loader from '../Components/Loader';
const Createnewitem = () => {
    const [title, settitle] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("null");
    const [minprice, setminprice] = useState("");
    const [msg, setmsg] = useState("null");
    const [isImage, setisImage] = useState(false);
    const [alertStatus, setalertStatus] = useState("danger");
    const [error, seterror] = useState(false);
    const [isLoading, setisloading] = useState(false);
    const UploadImage = (e) => {
      setisloading(true);
      const imagefile =e.target.files[0]; 
    }
    const deleteImage = () => {

    }
    const savedetails = () => {

    }
    return (
        <>
            <AnimatePresence>
                <div className="w-screen h-auto flex flex-col">
                    <Navbar2 />
                </div>
                <main className='mt-16 md:mt-24 md:px-16 px-4 py-4 w-full'>
                    <div className="w-full h-auto justify-center flex items-center">
                        <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-ceneter">
                            {
                                error && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger"
                                            ? "bg-red-400 text-red-600"
                                            : "bg-green-400 text-green-700"
                                            }`}>
                                        {msg}
                                    </motion.p>
                                )
                            }
                            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                <MdAdd className='text-4xl  text-white font-bold' />
                                <input
                                    onChange={(e) => settitle(e.target.value)}
                                    type="text"
                                    required
                                    value={title}
                                    placeholder="Enter the Title"
                                    className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500' />
                            </div>
                            <div className="w-full">
                                <select
                                    onChange={(e) => setcategory(e.target.value)}
                                    className='glasseffect outline-none w-full text-base border-b-2 border-gray-400 my-10 py-2 rounded-md cousor-pointer bg-transparent'>
                                    <option value={category} className='text-black'>
                                        Select Category
                                    </option>
                                    <option value="other" className='text-black'>
                                        Select Category
                                    </option>
                                    <option value="other" className='text-black'>
                                        Select Category
                                    </option>
                                    <option value="other" className='text-black'>
                                        Select Category
                                    </option>
                                    <option value="other" className='text-black'>
                                        Select
                                    </option>
                                    <option value="other" className='text-black'>
                                        Select Category
                                    </option>
                                </select>
                            </div>
                            <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[255px] md:h-[420] cousor-pointer rounded-lg ">
                                {isLoading ? <Loader /> : <>
                                    {
                                        !isImage ? <>
                                            <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                                <div className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-2">
                                                    <MdCloudUpload className='text-white text-3xl hover:text-gray-400 ' />
                                                    <p className="font-bold">Click here to Upload</p>
                                                </div>
                                                <input type="file" name='uploadimage' accept="image/*"
                                                    onChange={UploadImage} className="w-0 h-0" />
                                            </label>
                                        </> : <>
                                            <div className="relative h-full">
                                                <img src={isImage} alt="Uploaded Image" className='w-full h-full object-cover' />
                                                <button type='button' className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out'
                                                    onClick={deleteImage}><MdDelete className='text-white' /></button>
                                            </div>
                                        </>
                                    }
                                </>}
                            </div>
                            <div className="w-full flex flex-col md:flex-row items-center gap-3 mt-4">
                                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                    <GiMoneyStack className='text-white w-10 h-10' />
                                    <input type="text" required placeholder='Enter price...'
                                        className='w-full h-full text-lg bg-transparent outline-none border-none' value={price}
                                        onChange={(e) => {
                                            setprice(e.target.value)
                                        }} />
                                </div>
                                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                                    <GiMoneyStack className='text-white w-10 h-10' />
                                    <input type="text" required placeholder='Enter minimum price...' className='w-full h-full text-lg bg-transparent outline-none border-none'
                                        value={minprice}
                                        onChange={(e) => {
                                            setminprice(e.target.value);
                                        }} />
                                </div>
                            </div>
                            <div className="flex items-center w-full h-full mt-4">
                                <button type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold' onClick={savedetails} >Submit</button>
                            </div>
                        </div>
                    </div>
                </main>
            </AnimatePresence>
        </>
    )
}

export default Createnewitem