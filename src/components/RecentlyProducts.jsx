import React, { useEffect, useRef, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import Card from "./Card";
import dog from "../assets/images/dog.png"
function RecentlyProducts() {
  const products = useProducts([]);
  const scrollableRef = useRef(null);
  const circleClicked = useRef(null);
  const [latestProducts, setLatestProducts] = useState([]);
  const [showBtn, setShowBtn] = useState(true);
  const [showRBtn, setShowRBtn] = useState(false);
  const finalProducts = products.slice(0, 16);
  console.log(finalProducts);
  const circles = document.querySelectorAll(".menuu");
  console.log(circles[1]);
  const circleNumber = Math.ceil(finalProducts.length / 4);
  console.log(circleNumber);
  // const scrollableRef = document.querySelector(".sscroll");
  const circle = [];

  useEffect(() => {
    setLatestProducts(finalProducts.slice(0, 4));
    console.log("kharrr");
  }, [products]);
  useEffect(() => {
    // circles[0].classList.add("scale-150");
    // circles[0].classList.add("w-6");
  }, [circles]);
  for (let i = 0; i < circleNumber; i++) {
    circle.push(i);
    console.log("whattt????");
    console.log(circle);
  }

  const dragLeftHandler = () => {
    scrollableRef.current.scrollLeft -= 100;
    console.log(scrollableRef.current.scrollLeft);

    setShowRBtn(true);
  };

  const dragRightHandler = () => {
    scrollableRef.current.scrollLeft += 100;
    if (scrollableRef.current.scrollLeft === 0) {
      setShowRBtn(false);
    }
  };

  const clickHandler = (e) => {
    console.log(e.target.dataset.navid);
    const id = e.target.dataset.navid;
    scrollableRef.current.scrollLeft = 0;
    circles.forEach((item) => {
      if (item.dataset.navid === id) {
        item.classList.add("bg-orange-500");
        item.classList.add("w-5");
      } else {
        item.classList.remove("bg-orange-500");
        item.classList.remove("w-5");
      }
    });
    if (id === "0") {
      setLatestProducts(finalProducts.slice(0, 4));
      // circles[0].classList.remove("bg-orange-200");
      // circles[0].classList.add("bg-orange-500");
      // circles[0].classList.add("w-6");
      console.log(latestProducts);
    } else if (id === "1") {
      setLatestProducts(finalProducts.slice(4, 8));
      // scrollableRef.current.scrollLeft -= 6500; // Scroll 100 pixels to the left
      // circles[1].classList.add("bg-orange-500");
      // circles[1].classList.add("w-6");
      console.log(latestProducts);
    } else if (id === "2") {
      setLatestProducts(finalProducts.slice(8, 12));
      // circles[2].classList.add("bg-orange-500");
      // circles[2].classList.add("w-6");
      console.log(latestProducts);
      // scrollableRef.current.scrollLeft += 6500; // Scroll 100 pixels to the left
    } else if (id === "3") {
      setLatestProducts(finalProducts.slice(12, 16));
      // circles[3].classList.add("bg-orange-500");
      // circles[3].classList.add("w-6");
      console.log(latestProducts);
    }
  };
  return (
    <div className="w-full relative container mx-auto sm:px-8 xl:max-w-[1240px]">
      <div className="w-full flex items-center justify-between mb-12 mt-4">
        <div className=" text-sm sm:text-3xl font-bold">جدیدترین محصولات</div>
        <div className=" text-xs sm:text-2xl font-bold text-orange-500">مشاهده همه</div>
      </div>
      
      <div
        ref={scrollableRef}
        className="w-full flex sscroll items-center sm:gap-5 justify-between overflow-x-hidden sm:overflow-x-scroll no-scrollbar"
      >
        {latestProducts.map((item) => (
          <Card key={item.id} data={item} />
        ))}
        <div
          onClick={dragLeftHandler}
          className={
            showBtn
              ? "xl:hidden absolute bg-gray-500 bg-opacity-30 rounded-full w-14 h-14 top-1/2 left-0 flex items-center justify-center"
              : "hidden"
          }
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div
          onClick={dragRightHandler}
          className={
            showRBtn
              ? " xl:hidden absolute bg-gray-500 bg-opacity-30 rounded-full w-14 h-14 top-1/2 right-0 flex items-center justify-center"
              : "hidden"
          }
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className=" flex w-full items-center justify-center gap-x-2 my-8">
        {circle.map((item) => (
          <div
            ref={circleClicked}
            key={item}
            onClick={clickHandler}
            className="w-3 h-3 menuu bg-orange-200 rounded-full  "
            data-navid={item}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyProducts;