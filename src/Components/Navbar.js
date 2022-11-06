import React from 'react'
import logo from "../images/logo.svg"
import { Link } from 'react-router-dom'
import { Navbardata } from './Navbardata'
import { useState } from 'react';
const Navbar = () => {

    const [menuicon, setmenuicon] = useState("fas fa-bars text-3xl font-bold");
    const [listitem, setlistitem] = useState("hidden  md:grid md:font-bold grid-cols-5 text-center justify-end item-center text-center");

    function clicking() {
        if (menuicon === "fas fa-bars text-3xl font-bold") {
            setmenuicon("fas fa-multiply text-3xl font-bold"); 
            setlistitem("flex space-y-3 flex-col justify-start w-[100%] h-auto absolute top-[10%] left-[0%] items-center text-2xl nav-menu2 text-black");
        }
        else {
            setmenuicon("fas fa-bars text-3xl font-bold"); 
            setlistitem("hidden");
        }
    }
    return (
        <nav className="flex justify-between items-center text-[1rem] pr-[20px] pl-[20px] NavbarItems mx-auto">
            <h1 className='justify-start cursor-pointer flex items-center text-2xl font-bold '>
                <img className='mr-[0.5rem] ' src={logo} alt="img" /> Max Nfts
            </h1>
            <div onClick={clicking} className="menu-icons md:hidden">
                <i className={menuicon}></i>
            </div>
            <ul className={listitem}>
                {
                    Navbardata.map((item, index) => {
                        return (
                            <>
                                <li key={index} className="">
                                    <Link to={item.url}>
                                        <h1 className={item.cName}>{item.title}</h1>
                                    </Link>
                                </li>
                            </>
                        )
                    })
                } 
                <li className="">
                    <Link to="/">
                        <button className='border-blue-600 rounded-full bg-purple-600 text-white pl-4 pr-4 pt-1 pb-1'>Connect Wallet</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;