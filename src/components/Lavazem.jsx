import React from "react";

import bglavazem from "../assets/images/bg-lavazem.png";
import { useProducts } from "../context/ProductsContext";
import CardLavazem from "./CardLavazem";
import { Link } from "react-router-dom";

function Lavazem() {
  const products = useProducts();
  const categoryList = ["لوازم نگهداری سگ ", "لوازم نگهداری گربه "];
  const finalresult = [];
  categoryList.forEach((item) => {
    finalresult.push(products.filter((x) => x.categories.includes(item)));
  });
  // console.log(finalresult.flat(2));
  // export products result
  const productsToShow = finalresult.flat(2).slice(0, 6);
  // console.log(productsToShow);

  return (
    <div className=" container max-h-[820px] px-8 mx-auto xl:max-w-[1240px] grid grid-cols-7 my-6 p-4 gap-x-10">
      <div className=" relative col-start-1 col-end-4 md:col-end-3 rounded-2xl pb-6">
        <img src={bglavazem} alt="" className="h-full" />
        <div className=" absolute top-0 left-0 bg-blue-100 border-dashed border-blue-400 border-2 h-[calc(100%-24px)] w-full -z-10 rounded-2xl -rotate-3 "></div>
        <div className=" absolute w-full pr-5 sm:pr-0 top-24 left-0 flex items-center justify-center flex-col gap-y-5">
          <div className="flex w-full items-center justify-center font-bold text-lg lg:text-2xl text-white">
            لوازم نگهداری سگ و گربه
          </div>
          <Link to="/category/5">
            <div className=" flex items-center gap-x-0 justify-center lg:gap-x-2 text-black font-bold text-base lg:text-2xl">
              مشاهده همه
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className=" col-start-4 overflow-auto md:col-start-3 col-end-8 max-h-[820px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        {productsToShow.map((item) => (
          <CardLavazem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Lavazem;
