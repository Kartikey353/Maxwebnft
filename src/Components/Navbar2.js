import React, { useState } from 'react'
import { motion } from 'framer-motion';
import logo from "../images/logo.svg"
import avtar from "../images/nft1.png";
import { IoMdBasket } from 'react-icons/io';
import { RiFolderAddFill } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartvisibilityon } from '../Actions';
const Navbar2 = () => {

    const [avtarmenu, Setavtarmenu] = useState('transition-all ease-in-out duration-100 hidden');
    const dispatch = useDispatch();
    function clicking() {
        if (avtarmenu === 'transition-all ease-in-out duration-100 hidden')
            Setavtarmenu('w-40 shadow-[xl] glasseffect rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2 gap-3');
        else
            Setavtarmenu('transition-all ease-in-out duration-100 hidden');
    }
    return (
        <div className="fixed z-30 bg-blue-900 w-screen md:p-6 p-3">
            {/* desktop */}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <div className="flex items-center gap-2">
                    <motion.img whileTap={{ scale: 0.6 }} className='w-10 object-cover' src={logo} alt="img" />
                    <p className="text-white text-xl font-bold">Max Nft</p>
                </div>
                <div className="flex items-center gap-8">
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'>
                        <li className='text-white text-base hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Marketplace</li>
                        <li className='text-white text-base hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Collections</li>
                        <li className='text-white text-base hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
                        <li className='text-white text-base hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Community</li>
                    </motion.ul>
                    <motion.div whileTap={{ scale: 0.6 }} className="relative  flex items-center justify-center">
                        <IoMdBasket onClick={() => dispatch(cartvisibilityon())} className='text-2xl text-black cursor-pointer' />
                        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </motion.div>
                    <div onClick={clicking} className="relative">
                        <motion.img whileTap={{
                            scale: 0.6,
                        }} className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-xl rounded-full drop' src={avtar} alt="" />
                        <div style={{ backgroundColor: 'white' }} className={avtarmenu}>
                            <p className="text-black flex  items-center transition-all ease-in-out duration-100 font-bold text-xl">Name</p>
                            <hr />
                            <p className="text-black flex  items-center  cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">My Items</p>
                            <p className="text-black flex  items-center  cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">Purchased</p>
                            <p className="text-black flex  items-center  cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">Account</p>
                            <Link to="/Createnewitem129865efd" className="text-black flex  items-center gap-5 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">New Item <RiFolderAddFill /></Link>
                            <p className="text-black flex  items-center gap-5 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">Log Out <MdLogout /></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="flex md:hidden w-full h-full justify-between">
                <motion.div whileTap={{scale:0.6}} className="relative  flex items-center justify-center">
                    <IoMdBasket onClick={() => dispatch(cartvisibilityon())} className='text-2xl text-white cursor-pointer' />
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">2</p>
                    </div>
                </motion.div>
                <div className="flex items-center gap-2">
                    <motion.img whileTap={{ scale: 0.6 }} className='w-10 object-cover' src={logo} alt="img" />
                    <p className="text-white text-xl font-bold">Max Nfts</p>
                </div>
                <div className="realtive gap-4 flex">
                    <div onClick={clicking} className="relative gap-4 flex z-20">
                        <motion.img whileTap={{
                            scale: 0.6,
                        }} className='w-10 min-w-[40px] h-10 min-h-[40px] shadow-xl rounded-full drop' src={avtar} alt="" />
                        <motion.div
                            style={{ backgroundColor: 'white' }} className={avtarmenu}>
                            <p className="text-black flex  items-center transition-all ease-in-out duration-100 font-bold text-xl">Name</p>
                            <hr />
                            <ul
                                className='flex flex-col  gap-5'>
                                <li className='text-black md:text-white text-base hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Marketplace</li>
                                <li className='text-black md:text-white text-base hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Collections</li>
                                <li className='text-black md:text-white text-base hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
                                <li className='text-black md:text-white text-base hover:text-slate-500 duration-100 transition-all ease-in-out cursor-pointer'>Community</li>
                            </ul>
                            <p className="text-black flex  items-center  cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">My Items</p>
                            <p className="text-black flex  items-center  cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">Purchased</p>
                            <p className="text-black flex  items-center  cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">Account</p>
                            <p className="text-black flex  items-center gap-5 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100">New Item <RiFolderAddFill /></p>
                            <p className="text-black flex  items-center gap-5 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100 justify-center">Log Out <MdLogout /></p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar2;