import React from "react";
import { useCard } from "../context/CardContext";
import { productQuantity, productLikePosition } from "../helper/helper";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const { id, image, name, category, price, introduction } = data;
  const [state, dispatch] = useCard();
  const quantity = productQuantity(state, id);
  const likePosition = productLikePosition(state, id);
  console.log(likePosition);
  const navigate = useNavigate();
  // console.log(state);
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <div
      onClick={() => {
        navigate(`/products/${id}`);
      }}
      className=" xl:max-w-[275px] xl:h-[454px] group flex flex-col border-2 border-dashed rounded-xl p-5 border-gray-300 hover:border-orange-500 hover:bg-orange-500 hover:bg-opacity-10 items-center justify-between"
    >
      <div className=" flex w-full h-full flex-col items-start justify-between">
        <div className=" relative xl:h-60 xl:w-60 p-2 xl:p-4 flex items-center justify-center">
          <img src={image} alt="p-image" className="min-w-28" />
          <div className=" absolute top-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={likePosition ? "hidden" : "h-6 w-6"}
              onClick={(e) => {
                e.stopPropagation();
                clickHandler("LIKE_ITEM");
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#dc2626"
              className={likePosition ? "h-6 w-6" : "hidden"}
              onClick={() => {
                e.stopPropagation();
                clickHandler("UNLIKE_ITEM");
              }}
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
        </div>
        <span className=" text-gray-500 font-bold text-base xl:text-xl">
          {name}
        </span>
      </div>
      <div className=" flex w-full flex-col items-center justify-between xl:gap-y-5">
        <div className="w-full flex items-center justify-between">
          <div className="text-sm md:text-lg xl:text-2xl font-bold text-emerald-400 group-hover:text-orange-500">
            قیمت:
          </div>
          <div className="text-sm md:text-lg xl:text-2xl font-bold text-emerald-400 group-hover:text-orange-500">
            {price}
            <span className="pr-1">تومان</span>
          </div>
        </div>

        {/* buttons */}
        <div className=" flex w-full items-center justify-center ">
          {quantity === 0 ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                clickHandler("ADD_ITEM");
              }}
              className=" group-hover:bg-orange-500 bg-cyan-600 flex items-center justify-center xl:justify-between w-full py-2 px-2 sm:px-6 gap-x-2  rounded-lg"
            >
              <div className="flex group-hover:bg-orange-500 bg-cyan-600">
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
              <div className=" font-bold text-xs xl:text-lg text-white ">
                افزودن به سبد خرید
              </div>
            </div>
          ) : (
            <div
              className="bg-orange-500 text-white font-bold text-3xl h-12 w-12 rounded-2xl flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                clickHandler("INCREASE");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          )}
          {quantity > 0 && (
            <p className="bg-transparent text-orange-500 font-bold text-3xl h-12 w-12 rounded-2xl flex items-center justify-center">
              {quantity}
            </p>
          )}
          {quantity === 1 && (
            <div
              className="bg-orange-500 text-white font-bold text-3xl h-12 w-12 rounded-2xl flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                clickHandler("REMOVE_ITEM");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          )}
          {quantity > 1 && (
            <div
              className="bg-orange-500 text-white font-bold text-3xl h-12 w-12 rounded-2xl flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                clickHandler("DECREASE");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
