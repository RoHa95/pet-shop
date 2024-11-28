import React from "react";
import banner from "../assets/images/banner-pet.png";
import fish from "../assets/images/fish.png";
import cat from "../assets/images/cat.png";
import dog from "../assets/images/dog.png";
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center container gap-y-8 mx-auto p-8 xl:max-w-[1240px]">
      <div className="">
        <img src={banner} alt="" className="" />
      </div>
      <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-y-3 md:gap-x-3">
     
        <div onClick={()=> navigate("/category/1")} className=" w-full md:w-1/3 h-16 md:h-24 flex items-center justify-between bg-violet-500 bg-opacity-5 py-2 px-5 rounded-2xl hover:border hover:border-dashed hover:border-violet-500">
          <div className="flex items-center gap-x-4">
            <img className="w-10 h-10 md:w-16 md:h-16" src={fish}/>
            <span className=" font-black text-base md:text-lg lg:text-xl">غذا ماهی</span>
          </div>
          <div className=" bg-violet-500 rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
       
        <div onClick={()=> navigate("/category/6")} className=" w-full md:w-1/3 h-16 md:h-24 flex items-center justify-between bg-cyan-500 bg-opacity-5 py-2 px-5 rounded-2xl hover:border hover:border-dashed hover:border-cyan-500">
          <div className="flex items-center gap-x-4">
            <img className="w-10 h-10 md:w-16 md:h-16" src={cat}/>
            <span className=" font-black md:text-lg lg:text-xl"> غذا و لوازم گربه</span>
          </div>
          <div className=" bg-cyan-500 rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <div onClick={()=> navigate("/category/7")} className=" w-full md:w-1/3 h-16 md:h-24 flex items-center justify-between bg-orange-500 bg-opacity-5 py-2 px-5 rounded-2xl hover:border hover:border-dashed hover:border-orange-500">
          <div className="flex items-center gap-x-4">
            <img className="w-10 h-10 md:w-16 md:h-16" src={dog}/>
            <span className=" font-black md:text-lg lg:text-xl">غذا و لوازم سگ </span>
          </div>
          <div className=" bg-orange-500 rounded-full w-6 h-6 md:w-10 md:h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
