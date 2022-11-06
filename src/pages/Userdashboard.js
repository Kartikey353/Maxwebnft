import React from 'react'
import { AnimatePresence } from 'framer-motion';
import Navbar2 from '../Components/Navbar2';
import MainContainer from '../Components/MainContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Explorenewitems from '../Components/Explorenewitems';
import CartContainer from '../Components/CartContainer';
import Footer from '../Components/Footer'; 
import Topnewcollection from '../Components/Topnewcollection'; 
const Userdashboard = () => { 
  return ( 
    <>
      <AnimatePresence>
        <div className="w-screen h-auto flex flex-col">
          <Navbar2 />
          <main className='mt-16 md:mt-24 md:px-16 px-4 py-4 w-full'>
            <MainContainer />
            <section className="w-full my-10">
              <div className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold relative capitalize before:absolute 
                before:rounded-lg before:content-around before:w-40 before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">Explore New Collection</p>
                <div className="hidden md:flex gap-3 items-center ">
                  <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center">
                    <MdChevronLeft className='text-[3rem] text-white' />
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center">
                    <MdChevronRight className='text-[3rem] text-white' />
                  </motion.div>
                </div>
              </div>
              <div className="w-full flex items-center justify-between my-10">
                <Explorenewitems />
              </div>
              <div className="w-full flex items-center justify-between my-10">
                <Topnewcollection />
              </div>
            </section>
            <CartContainer/>
            <Footer />
          </main>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Userdashboard;