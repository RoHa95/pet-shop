import React from "react";

function Card({ data }) {
  const { id, image, name, category, price, introduction } = data;

  return (
    <div className=" xl:max-w-[275px] xl:h-[454px] group flex flex-col border-2 border-dashed rounded-xl p-5 border-gray-300 hover:border-orange-500 hover:bg-orange-500 hover:bg-opacity-10 items-center justify-between">
      <div className=" flex w-full h-full flex-col items-start justify-between">
        <div className="xl:h-60 xl:w-60 p-2 xl:p-4 flex items-center justify-center">
          <img src={image} alt="p-image" className="min-w-28" />
        </div>
        <span className=" text-gray-500 font-bold text-base xl:text-xl">{name}</span>
      </div>
      <div className=" flex w-full flex-col items-center justify-between xl:gap-y-5">
        <div className="w-full flex items-center justify-between">
          <div className=" text-lg xl:text-2xl font-bold text-emerald-400 group-hover:text-orange-500">قیمت:</div>
          <div className=" text-lg xl:text-2xl font-bold text-emerald-400 group-hover:text-orange-500">{price}<span className="pr-1">تومان</span></div>
        </div>
        <div className=" group-hover:bg-orange-500 bg-cyan-600 flex items-center justify-center xl:justify-between w-full py-2 px-2 sm:px-6 gap-x-2  rounded-lg">
          <div className="hidden sm:flex group-hover:bg-orange-500 bg-cyan-600">
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.937 0.0175171C23.261 0.0175171 26.1663 3.0528 26.1663 7.56995V18.0969C26.1663 22.614 23.261 25.6493 18.937 25.6493H7.7639C3.43988 25.6493 0.534546 22.614 0.534546 18.0969V7.56995C0.534546 3.0528 3.43988 0.0175171 7.7639 0.0175171H18.937ZM18.937 1.80578H7.7639C4.45919 1.80578 2.32281 4.06734 2.32281 7.56995V18.0969C2.32281 21.5995 4.45919 23.861 7.7639 23.861H18.937C22.2429 23.861 24.3781 21.5995 24.3781 18.0969V7.56995C24.3781 4.06734 22.2429 1.80578 18.937 1.80578ZM13.3504 7.56077C13.844 7.56077 14.2446 7.96134 14.2446 8.4549V11.9273L17.7215 11.9276C18.2151 11.9276 18.6157 12.3282 18.6157 12.8217C18.6157 13.3153 18.2151 13.7158 17.7215 13.7158L14.2446 13.7156V17.19C14.2446 17.6835 13.844 18.0841 13.3504 18.0841C12.8569 18.0841 12.4563 17.6835 12.4563 17.19V13.7156L8.97932 13.7158C8.48457 13.7158 8.08519 13.3153 8.08519 12.8217C8.08519 12.3282 8.48457 11.9276 8.97932 11.9276L12.4563 11.9273V8.4549C12.4563 7.96134 12.8569 7.56077 13.3504 7.56077Z"
                fill="white"
              />
            </svg>
          </div>
          <div className=" font-bold text-xs xl:text-lg text-white ">افزودن به سبد خرید</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
