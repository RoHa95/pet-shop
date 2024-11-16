import React, { useEffect, useRef, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import Card from "./Card";

function RecentlyProducts() {
  const products = useProducts([]);
  const scrollableRef = useRef(null);
  const [latestProducts, setLatestProducts] = useState([]);
  const finalProducts = products.slice(0, 15);
  console.log(finalProducts);

  const circleNumber = Math.ceil(finalProducts.length / 4);
  console.log(circleNumber);

  const circle = [];
  
  useEffect(() => {
    setLatestProducts(finalProducts.slice(0, 4));
    console.log("kharrr");
    
  }, [products]);
  for (let i = 0; i < circleNumber; i++) {
    circle.push(i);
    console.log("whattt????");
    console.log(circle);
  }

  const clickHandler = (e) => {
    console.log(e.target.dataset.navid);
    const id = e.target.dataset.navid;
    if (id === "0") {
      setLatestProducts(finalProducts.slice(0, 4));
      console.log(latestProducts);
    } else if (id === "1") {
      setLatestProducts(finalProducts.slice(4, 8));
      scrollableRef.current.scrollLeft -= 6500; // Scroll 100 pixels to the left
      console.log(latestProducts);
    } else if (id === "2") {
      setLatestProducts(finalProducts.slice(8, 12));
      console.log(latestProducts);
      scrollableRef.current.scrollLeft += 6500; // Scroll 100 pixels to the left
    } else if (id === "3") {
      setLatestProducts(finalProducts.slice(12, 16));
      console.log(latestProducts);
    }
  };
  return (
    <div className=" container mx-auto px-8 xl:max-w-[1240px]">
      <div className="w-full flex items-center justify-between mb-12 mt-4">
        <div className=" text-3xl font-bold">جدیدترین محصولات</div>
        <div className=" text-2xl font-bold text-orange-500">مشاهده همه</div>
      </div>
      <div
        ref={scrollableRef}
        className=" w-full flex items-center gap-5 overflow-x-hidden 
        -x-scroll no-scrollbar "
      >
        {latestProducts.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className=" flex items-center justify-center gap-x-2 my-8">
        {/*  
        <div
          onClick={clickHandler}
          className="w-3 h-3 bg-orange-200 rounded-full"
          data-navid="1"
        ></div>
        <div
          onClick={clickHandler}
          className="w-6 h-3 bg-orange-500 rounded-full"
          data-navid="2"
        ></div>
        <div
          onClick={clickHandler}
          className="w-3 h-3 bg-orange-200 rounded-full"
          data-navid="3"
        ></div>
        <div
          onClick={clickHandler}
          className="w-3 h-3 bg-orange-200 rounded-full"
          data-navid="4"
        ></div>
        */}
        {circle.map((item) => (
          <div
            key={item}
            onClick={clickHandler}
            className="w-3 h-3 bg-orange-200 rounded-full"
            data-navid={item}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyProducts;
