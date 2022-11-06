import React from 'react'
import nft from '../images/nft4.png';
import Mainbg from "../images/bgimage2.png";
import Mobilecard from './Mobilecard';
const MainContainer = () => {
    return (
        <>
            <section className="grid grid-cols-1 gap-2 md:grid-cols-2 w-full" id='userdashboardhome'>
                <div className="px-2 py-2 gap-6 flex-1 flex flex-col items-start  justify-center">
                    <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
                        <p className="text-base text-orange-500 font-semibold">
                            Extraordinary NFts
                        </p>
                        <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl bg-white">
                            <img src={nft} alt=""
                                className='w-full h-full object-contain' />
                        </div>
                    </div>
                    <p className="text-[2.5rem] font-bold myfont tracking-wide text-white lg:text-[4.5rem]">
                        The Fastest Selling Nfts With <span className='text-orange-500'>Easy & secure payments.</span>
                    </p>
                    <p className="text-base text-slate-200 text-center md:text-left md:w-[80%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quibusdam eius suscipit possimus, animi cum iusto aliquid voluptates adipisci hic nobis modi laudantium soluta. Repellat delectus aut inventore velit excepturi. Vel illum quidem voluptatem repudiandae molestias numquam excepturi ea sit?
                    </p>
                    <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 font-bold text-xl'>Byu Now</button>
                </div>
                <div className="py-2 items-center justify-center overflow-hidden my-auto">
                    <img src={Mainbg} className='mx-auto' alt="" />
                    <p className="flex justify-center text-[2.5rem] font-bold text-base pb-4 h-auto glasseffect md:w-[50%] mx-auto px-4 py-2">Dragon Egg</p> 
                </div>
            </section>
        </>
    )
}

export default MainContainer