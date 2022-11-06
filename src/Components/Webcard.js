import React from 'react'
import { useState } from 'react';
import Slider from 'react-slick';
import Mobilecard from './Mobilecard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [<Mobilecard value="Collect Now"/>, <Mobilecard value="Collect Now" />, <Mobilecard value="Collect Now" />, <Mobilecard value="Collect Now" />, <Mobilecard value="Collect Now" />];
const Webcard = () => {
    const [imagesIndex, setImagesIndex] = useState(0);
    const settings1 = {
        infinite: true,
        lazyLoad: true,
        speed: 400,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        beforeChange: (current, next) => {
            setImagesIndex(next);
        }
    };
    return (
        <>
            <div className="hidden md:block w-[80vw] mx-auto justify-center">
                <Slider  {...settings1}>
                    {
                        images.map((img, idx) => {
                            return (
                                <div key={idx} className={idx === imagesIndex ? "slide activeSlide" : "slide collect"}>
                                    {
                                        img
                                    }
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className="md:hidden w-[90vw] h-auto">
                <Slider  {...settings1}>
                    {
                        images.map((img, idx) => {
                            return (
                                <div key={idx} className={idx === imagesIndex ? "slide activeSlide" : "slide collect"}>
                                    {
                                        img
                                    }
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}

export default Webcard