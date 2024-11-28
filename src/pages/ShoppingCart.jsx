import React, { useCallback } from "react";
import { useCard } from "../context/CardContext";
import Ads from "../components/Ads";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { ThreeDots } from "react-loader-spinner";
function ShoppingCart() {
  const cartItems = useCard();
  console.log(cartItems[0]);
  const [state, dispatch] = useCard();
  const clickHandler = (type) => {
    dispatch({ type });
  };
  return (
    <div>
      <Ads />
      <Navbar />
      <div className="container mx-auto p-8 xl:max-w-[1240px] flex flex-col sm:flex-row">
        {cartItems[0].selectedItems.length !== 0 ? <div className="sm:w-3/4 ml-4 xl:ml-20">{cartItems[0].selectedItems.map(item=>(<CartItem data={item}/>))}</div>:<p className=" lg:w-3/4">لیست خرید شما خالی می باشد.</p>
        }
        <div className="sm:w-1/4 m-6 h-fit rounded-2xl border-2 border-dashed border-orange-500 p-3">
        <div className=" w-full flex items-center justify-between"><div>تعداد کالاها : </div><div>{cartItems[0].itemsCounter} عدد</div></div>
        <div className=" w-full flex items-center justify-between"><div> جمع سبد خرید : </div><div>{cartItems[0].total} هزار تومان </div></div>
        <div onClick={() => {
              clickHandler("CHECKOUT");
            }} className=" w-full bg-orange-500 rounded-md text-white py-2 px-5 text-center mt-10 cursor-pointer">تایید و تکمیل سفارش</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
