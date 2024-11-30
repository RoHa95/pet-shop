import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import Card from "./Card";
import dog from "../assets/images/dog.png";
import { ThreeDots } from "react-loader-spinner";
function RecentlyProducts() {
  const products = useProducts([]);
  const scrollableRef = useRef(null);
  const circleClicked = useRef(null);
  const [latestProducts, setLatestProducts] = useState([]);
  const [showBtn, setShowBtn] = useState(true);
  const [showRBtn, setShowRBtn] = useState(false);
  const finalProducts = products.slice(0, 16);
  // console.log(finalProducts);
  const circles = document.querySelectorAll(".menuu");
  // console.log(circles[1]);
  const circleNumber = Math.ceil(finalProducts.length / 4);
  // console.log(circleNumber);
  // const scrollableRef = document.querySelector(".sscroll");
  const circle = [];

  useEffect(() => {
    setLatestProducts(finalProducts.slice(0, 4));
    // console.log("kharrr");
  }, [products]);

  for (let i = 0; i < circleNumber; i++) {
    circle.push(i);
    // console.log("whattt????");
    // console.log(circle);
  }

  const dragLeftHandler = () => {
    scrollableRef.current.scrollLeft -= 100;
    // console.log(scrollableRef.current.scrollLeft);

    setShowRBtn(true);
  };

  const dragRightHandler = () => {
    scrollableRef.current.scrollLeft += 100;
    if (scrollableRef.current.scrollLeft === 0) {
      setShowRBtn(false);
    }
  };

  const clickHandler = (e) => {
    // console.log(e.target.dataset.navid);
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

      // console.log(latestProducts);
    } else if (id === "1") {
      setLatestProducts(finalProducts.slice(4, 8));

      // console.log(latestProducts);
    } else if (id === "2") {
      setLatestProducts(finalProducts.slice(8, 12));

      // console.log(latestProducts);
    } else if (id === "3") {
      setLatestProducts(finalProducts.slice(12, 16));

      // console.log(latestProducts);
    }
  };
  return (
    <div className=" w-screen relative container mx-auto px-3 sm:px-8 xl:max-w-[1240px]">
      <div className=" flex items-center justify-between mb-12 mt-4">
        <div className=" text-xl sm:text-3xl font-bold">جدیدترین محصولات</div>
        <div className=" text-xl sm:text-2xl font-bold text-orange-500">
          <Link
            to="/products"
            className=" text-orange-500 hover:text-orange-300"
          >
            {" "}
            مشاهده همه
          </Link>
        </div>
      </div>

      <div
        ref={scrollableRef}
        className="flex justify-between items-stretch sscroll gap-3 sm:gap-5 overflow-x-hidden sm:overflow-x-scroll no-scrollbar"
      >
        {latestProducts.length !== 0 ? (
          latestProducts.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <div className="w-full flex items-center justify-center">
            <ThreeDots color="#f97316" />
          </div>
        )}
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
