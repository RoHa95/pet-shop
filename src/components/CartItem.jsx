import React from "react";
import { useCard } from "../context/CardContext";
import { ThreeDots } from "react-loader-spinner";
function CartItem({ data }) {
  const [state, dispatch] = useCard();
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return !data ? (
    <ThreeDots />
  ) : (
    <div className="lg:w-full flex border-2 border-dashed border-orange-500 rounded-2xl m-6">
      <div>
        <img src={data.image} />
      </div>
      <div className=" flex flex-col p-3 justify-center gap-y-2">
        <div className=" text-base lg:text-xl font-bold">{data.name}</div>
        <div className=" text-gray-500">{data.price} هزار تومان</div>
        <div className=" flex items-stretch gap-x-2">
          {data.categories.map((item) => (
            <span className="text-[10px] sm:text-base bg-orange-500 rounded text-orange-200 px-3">
              {item}{" "}
            </span>
          ))}
        </div>
        <div className=" flex items-center justify-start gap-x-3">
          <div
            className="w-6 h-6 sm:w-10 sm:h-10 text-center flex items-center justify-center text-lg sm:text-3xl text-white bg-orange-500 rounded-sm"
            onClick={() => {
              clickHandler("INCREASE");
            }}
          >
            {" "}
            +{" "}
          </div>
          <div className=" text-gray-500">تعداد : {data.quantity}</div>
          {data.quantity > 1 ? (
            <div
              className="w-6 h-6 sm:w-10 sm:h-10 text-center flex items-center justify-center text-lg sm:text-3xl text-white bg-orange-500 rounded-sm"
              onClick={() => {
                clickHandler("DECREASE");
              }}
            >
              {" "}
              -{" "}
            </div>
          ) : (
            <div
              className="w-6 h-6 sm:w-10 sm:h-10 text-center flex items-center justify-center text-lg sm:text-3xl bg-orange-500 rounded-sm"
              onClick={() => {
                clickHandler("REMOVE_ITEM");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          )}
        </div>

       
      </div>
    </div>
  );
}

export default CartItem;
