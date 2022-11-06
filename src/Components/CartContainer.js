import React from 'react'
import { MdOutlineKeyboardBackspace, MdDelete } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { motion } from "framer-motion"
import { MdSaveAlt } from 'react-icons/md'
import imgcart from "../images/nft9.png"
import { useSelector, useDispatch } from 'react-redux'
import { cartvisibilityoff } from '../Actions'
import { useState } from 'react'
import { useEffect } from 'react'
const CartContainer = () => {
    const dispatch = useDispatch();
    const Mystate = useSelector((state) => state.CarticonClickreducer);
    const [cartvisibility, setcartvisibility] = useState("hidden"); 
    useEffect(() => {
        setcartvisibility((Mystate) ? "w-full md:w-[375px] h-screen bg-white drop-shadow-md flex flex-col fixed top-0 right-0 z-[110]" : "hidden")
    }, [Mystate]);
    return (
        <>
            <div className={cartvisibility}>
                <div className="w-full flex items-center justify-between p-4 cursor-pointer">
                    <motion.div whileTap={{ scale: 0.6 }} className="div">
                        <MdOutlineKeyboardBackspace onClick={() => dispatch(cartvisibilityoff())} className='text-black text-4xl ' />
                    </motion.div>
                    <p className="text-black font-bold text-xl uppercase">Cart</p>
                    <motion.p whileTap={{ scale: 0.6 }} className="flex items-center gap-2 p-1 px-2 my-2 bg-orange-300 rounded-md hover:shadow-lg duration-100 ease-in-out transition-all cursor-pointer font-bold text-black text-base">Clear <RiRefreshFill /></motion.p>
                </div>
                {/* bottom */}
                <div className="w-full h-full bg-cartbg rounded-t-[2rem] flex flex-col overflow-y-scroll scrollbarnone">
                    <div className="w-full h-auto px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbarnone">
                        {/* cart item */}
                        <motion.div whileHover={{ scale: 1.1 }} className='w-full p-1 px-2 rounded-lg bg-cartitem flex items-center gap-2'>
                            <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src={imgcart} alt="" />
                            <div className="flex flex-col align-middle">
                                <p className="font-bold">#Hape Prime</p>
                                <div className="flex flex-row gap-2">
                                    <motion.p whileTap={{ scale: 0.7 }} className="flex rounded items-center p-1 px-2 my-2 gap-1 bg-green-600 cursor-pointer font-bold">Save for later<MdSaveAlt /></motion.p>
                                    <motion.p whileTap={{ scale: 0.7 }} className="flex rounded items-center p-1 px-2 my-2 gap-1 bg-red-600 cursor-pointer font-bold">Delete<MdDelete /></motion.p>
                                </div>
                            </div>
                        </motion.div>
                        {/*  */}

                        {/*  */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartContainer;