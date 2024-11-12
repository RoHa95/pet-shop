import React from "react";

function Ads() {
  return (
    <div className=" w-screen h-10 md:h-16 bg-orange-400">
      <div className=" w-full h-full container mx-auto lg:max-w-[1240px] flex justify-center items-center gap-x-2">
        <div className=" bg-white flex items-center justify-center text-orange-400 rounded-3xl text-base md:text-xl font-bold px-4">
          تا ۵۰٪
        </div>
        <div className=" flex items-center justify-center font-bold text-base md:text-xl text-white">
          تخفیف برای تمامی محصولات
        </div>
      </div>
    </div>
  );
}

export default Ads;
