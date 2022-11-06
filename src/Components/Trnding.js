import React from "react";
import Webcard from "./Webcard";
const Trnding = () => {
    return (
        <div className="">
            <div className="heading flex md:w-[80vw] w-[100vw] justify-center pt-[10vw] mx-auto md:pb-[7vw] pb-[8vw]">
                <h1 className='mytext text-2xl font-bold specialfont'>Trending NFTs</h1>
            </div>
            <Webcard /> 
            <div className="md:w-[80vw] w-[100vw] justify-center mx-auto flex pt-[3vw] pb-[3vw]">
            <h1 className='text-sm specialfont border-[2px] bordercolor rounded-full pr-3 pl-3'>See More</h1>
            </div>
        </div>
    )
}
export default Trnding;