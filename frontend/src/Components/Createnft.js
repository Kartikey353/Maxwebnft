import React from 'react'
const Createnft = () => {
    return (
        <>
            <div className="md:w-[80vw] mx-auto w-[90vw] glasseffect pb-[3vw]">
                <h1 className='md:text-[2vw] text-xl mytext text-center specialfont pt-[2vw] pb-[2vw] z-10'>Create And Sell Your NFTs</h1>
                <div className="md:w-[80vw] w-[80%] mx-auto justify-center md:flex">
                    <div className="justify-between text-center pt-[1vw] pl-[2vw] pr-[2vw] pb-[2vw]">
                        <button><i class="fas fa-wallet md:text-[2vw] text-[4.5vw]"></i></button>
                        <h1 className='md:text-[1vw] text-[3.5vw] pt-[1vw] z-10'>Set up your wallet</h1>
                        <p className="md:text-[.7vw] pt-[1vw] text-[2.5vw] z-10">
                            Once you have set up your wallet of choice, connect it with maxnft by clicking the connect wallet button in the top right corner. Learn about the wallets we support.
                        </p>
                    </div>
                    <div className="justify-between text-center pt-[1vw] pl-[2vw] pr-[2vw] pb-[2vw]">
                        <button><i class="fas fa-file md:text-[2vw] text-[4.5vw]"></i></button>
                        <h1 className='md:text-[1vw] text-[3.5vw] pt-[1vw] z-10'>Upload & Create Collection</h1>
                        <p className="md:text-[.7vw] pt-[1vw] text-[2.5vw] z-10">
                            Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
                        </p>
                    </div>
                    <div className="justify-between text-center pt-[1vw] pl-[2vw] pr-[2vw] pb-[2vw]">
                        <button><i class="fas fa-book md:text-[2vw] text-[4vw]"></i></button>
                        <h1 className='md:text-[1vw] text-[3.5vw] pt-[1vw] z-10'>List them for sale</h1>
                        <p className="md:text-[.7vw] pt-[1vw] text-[2.5vw] z-10">
                            Choose between auctions, fixed-price listings, and declining-price listings.
                            You choose how you want to sell your Nfts and we help you sell them.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Createnft;