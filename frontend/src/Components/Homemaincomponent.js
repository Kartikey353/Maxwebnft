import img1 from "../images/nft11.png"
import metamask from "../images/metamask.svg"
import trustwallet from "../images/opera.png";
import safepal from "../images/safepal.png";
import venly from "../images/venly.png";
import exodus from "../images/opera.png";
import { useState } from "react";
const Homemaincomponent = () => {
    const [changeCollections, setchangeCollections] = useState(4230);
    const [changeArtist, setchangeArtist] = useState(200);
    const [changeCommunity, setchangeCommunity] = useState(10);
    const [changeTime, setchangeTime] = useState('00 : 00 : 00');
    var countDownDate = new Date("Oct 23, 2022 8:15:52").getTime();
    setInterval(function () {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        setchangeTime(`${hours} : ${minutes} : ${seconds}`);
    }, 1000);

    return (
        <>
            <div className="w-[100vw] flex justify-between pt-[5%]">
                <div className="md:w-[50vw] content w-[100vw]">
                    <h1 className='md:text-7xl md:pl-5 md:pr-5 hidden md:block specialfont'>Discover <br /> Collect, & Sell <br /> <em className='mytext'>Extraordinary</em><br /> NFts</h1>
                    <h1 className="text-4xl md:hidden w-[100vw] h-[30vh]  items-center text-center flex blinkingcursor mytext specialfont"> Discover Collect, & Sell Extraordinary NFts</h1>
                    <p className="md:w-[30vw] w-[100vw]  md:pt-[5vh] text-center md:text-left md:pl-5">
                        The Leading NFT Marketplace On Ethereum Home to The Next Generation of Digital Creators Discover The Best NFT Collections.
                    </p>
                    <div className="flex space-x-5 md:justify-start justify-center pt-[5vh] md:pl-5">
                        <button className='bg-blue-600 text-white text-xl rounded-full pl-3 pr-3'>Explore</button>
                        <button className='border-[1px] border-white rounded-full text-xl pl-3 pr-3'>Create</button>
                    </div>
                    <div className="flex md:justify-start justify-center md:pl-5 pt-[8vh] space-x-8">
                        <div className="collections">
                            <h1 className='text-4xl'>{`${changeCollections}+`}</h1>
                            <p>Collections</p>
                        </div>
                        <div className="artist">
                            <h1 className='text-4xl'>{`${changeArtist}K+`}</h1>
                            <p>Artist</p>
                        </div>
                        <div className="community">
                            <h1 className='text-4xl'>{`${changeCommunity}K+`}</h1>
                            <p>Community</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50vw] justify-end hidden md:block h-auto">
                    <div className="w-[10vw] h-[5vh] flex mx-[30vw] mt-[0vh] relative z-10 img-above text-black">
                        <h1 className='font-bold text-2xl flex mx-auto'>Bid Now</h1>
                    </div>
                    <img className='w-[25vw] mx-auto transform-img mt-[-3vh]' src={img1} alt="img" />
                    <div className="w-[25vw] mx-auto h-[20vh] img-belowbox mr-[12vw] mt-[-10vh]">
                        <div className="absolute bottom-[-3vh] right-0 img-belowbox2 rounded text-[2vw] font-bold text-black">
                            <p className="1 text-[1.2vw] tracking-normal text-white">
                                Auction End
                            </p>
                            <p className="2 text-white">
                                {changeTime}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[100vw]">
                <div className="md:w-[60vw] gap-[3vw] w-[100vw] mx-auto grid grid-cols-3 md:pt-[10vw] pt-[12vw]">
                    <div className="metamask flex space-x-3 content-center text-center justify-center">
                        <img className='w-[5vw]' src={metamask} alt="" />
                        <h1 className='text-xl font-bold my-auto'>Metamask</h1>
                    </div>
                    <div className="metamask flex space-x-3 content-center text-center justify-center">
                        <img className='w-[5vw]' src={trustwallet} alt="" />
                        <h1 className='text-xl font-bold my-auto'>TrustWallet</h1>
                    </div>
                    <div className="metamask flex space-x-3 content-center text-center justify-center">
                        <img className='w-[5vw]' src={venly} alt="" />
                        <h1 className='text-xl font-bold my-auto'>Venly</h1>
                    </div>
                </div>
                <div className=" flex md:w-[70vw] gap-[5vw] w-[100vw] mx-auto justify-center md:pt-[3vw] pt-[5vw]">
                    <div className="metamask flex space-x-3 content-center text-center justify-center">
                        <img className='w-[5vw]' src={exodus} alt="" />
                        <h1 className='text-xl font-bold my-auto'>Exodus</h1>
                    </div>
                    <div className="metamask flex space-x-3 content-center text-center justify-center">
                        <img className='w-[5vw]' src={safepal} alt="" />
                        <h1 className='text-xl font-bold my-auto'>Safepal</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homemaincomponent;