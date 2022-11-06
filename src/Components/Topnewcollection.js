import React from "react";
import { GiMonkey } from "react-icons/gi";
import { Categories } from "../utils/Categories";
const Topnewcollection = () => {
  return (
    <>
      <section className="w-full my-6" id="menu">
        <div className="w-full flex flex-col items-start justify-start">
          <p
            className="text-2xl font-semibold relative capitalize before:absolute 
                before:rounded-lg before:content-around before:w-40 before:h-1 before:-bottom-1 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"
          >
            Top Collections
          </p>
          <div className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-auto scrollbar-none py-10">
            {/* <div className="group w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-orange-500 hover:text-black hover:scale-110 duration-150 transition-all ease-in-out bg-white">
              <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-slate-200 flex items-center justify-center ">
                <GiMonkey className="text-4xl" />
              </div>
            </div> */}
            {Categories.map((item, index) => {
              return (
                <>
                  <div
                    id="index"
                    className="group w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-orange-500 hover:text-black hover:scale-110 duration-150 transition-all ease-in-out bg-white"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-500 group-hover:bg-slate-200 flex items-center justify-center ">
                      <GiMonkey className="text-4xl" />
                    </div>
                    <p className="text-center justify-center text-[1.2rem] font-bold text-black">{item.name}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Topnewcollection;