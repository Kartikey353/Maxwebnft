import React from 'react'
import { Dropdowndata } from './Dropdowndata';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mobilecars2 from './Mobilecards2';
const DropdownNavbar = () => {
  const settings1 = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 1,
  };

  const list = ["App", "Collectibles", "Metaverse", "Virtual Worlds", "Sports", "Music"]; 
  const item = [<Mobilecars2/>,<Mobilecars2/>,<Mobilecars2/>,<Mobilecars2/>,<Mobilecars2/>,<Mobilecars2/>];
  return (
    <>
      <nav className="hidden md:flex justify-between items-center text-[1rem] pr-[20px] pl-[20px] NavbarItems mx-auto">
        <ul className="flex md:w-[80vw] w-[100vw] justify-between mx-auto">
          {
            Dropdowndata.map((item, idx) => {
              return (
                <>
                  <li key={idx} className="flex">
                    <h1 className={item.cName}>{item.title}</h1>
                  </li>
                </>
              )
            })
          }
        </ul>
      </nav>
      <nav className="w-[100vw] mx-auto md:hidden flex justify-center">
        <div className="md:hidden w-[90vw] h-auto justify-center mx-auto">
          <Slider  {...settings1}>
            {
              list.map((img, idx) => {
                return (
                  <div key={idx} className="px-3  rounded-full text-center">
                    {
                      <div className="hover:bg-blue-500 rounded-full">
                        {
                          img
                        }
                      </div>
                    }
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </nav>
      <div className="hidden w-[80vw]  mx-auto md:grid grid-cols-3 gap-3 pt-[3vh]">
        <Mobilecars2 />
        <Mobilecars2 />
        <Mobilecars2 />
        <Mobilecars2 />
        <Mobilecars2 />
        <Mobilecars2 />
      </div>
      <div className="md:hidden w-[90vw] h-auto justify-center mx-auto pt-[3vh] pb-[2vh]">
        <Slider  {...settings1}>
          {
            item.map((img, idx) => {
              return (
                <div key={idx} className="px-3  rounded-full text-center">
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
export default DropdownNavbar;