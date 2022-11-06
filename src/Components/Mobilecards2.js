import React from 'react'
import img1 from "../images/nft1.png";
const Mobilecards2 = () => {
    return (
            <div className="cards">
                <div className="border-[0px] bordercolor md:w-[23vw] w-[38vw] glasseffect rounded">
                    <div className="img pt-[1.5vw] pr-[1.5vw] pl-[1.5vw] pb-[1.5vw]">
                        <img className="md:w-[20vw] w-[35vw] object-cover border rounded" src={img1} alt="img" />
                    </div>
                    <div className="cardbody pr-[1.5vw] pl-[1.5vw] pb-[1.5vw]">
                        <div className="heading w-[100%] justify-between flex">
                            <div className="title flex space-x-3">
                                <div className="logo">
                                    <img src={img1} className="md:w-[4vw] w-[8vw] rounded" alt="" />
                                </div>
                                <div className="details">
                                    <h1 className="md:text-[1.5vw] text-[2.5vw]">Hape #6024</h1>
                                    <p className="md:text-[1vw] text-[2vw]">Hape Prime</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[1.5vw] pr-[0.8vw] pl-[0.8vw] pb-[1.5vw] flex w-[100%] justify-between">
                            <div className="amountcontent">
                                <h1 className="md:text-[1.2vw] text-[2.5vw]">15.8 ETH</h1>
                                <p className="md:text-[1vw] text-[2vw]">Latest Bid</p>
                            </div>
                            <div className="amountcontent">
                                <h1 className="md:text-[1.2vw] text-[2.5vw]">$ 180.35</h1>
                                <p className="md:text-[1vw] text-[2vw] text-green-500">+12.5%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Mobilecards2;