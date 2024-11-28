import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDetailsProducts, useProducts } from "../context/ProductsContext";
import Ads from "../components/Ads";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThreeDots } from "react-loader-spinner";
function DetailsPage() {
  const { id } = useParams();
  const products = useProducts();
  console.log(products);
  // const product = products.find((item) => item.id === id);
  // console.log(product);
  const product = useDetailsProducts(+id);
  console.log(product);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="">
      <Ads />
      <Navbar />
      {!product ? <div className="w-full flex items-center justify-center my-20"><ThreeDots color="#f97316" /></div>:<div className=" container p-8 mx-auto xl:max-w-[1240px] flex flex-col-reverse lg:flex-row justify-between">
        <div className=" lg:w-3/4">
          <h2 className="text-2xl py-4">{product.name}</h2>
          <p className=" text-gray-500 pl-8">{product.introduction}</p>
          <p className=" my-8 text-justify">{product.Ingredients}</p>
          <div className="w-full flex flex-col gap-y-3">
            <div>قیمت : {product.price} هزار تومان</div>
            <div>
              دسته بندی :{" "}
              {product.categories.map((item) => (
                <span>{item} ، </span>
              ))}
            </div>
            <div> تاریخ انقضا : {product.expiration}</div>
          </div>
        </div>
        <div className="w-full flex justify-center lg:w-1/4">
          <img className=" lg:w-full" src={product.image} alt="" />
        </div>
      </div>}
      {/* <div className=" container p-8 mx-auto xl:max-w-[1240px] flex flex-col-reverse lg:flex-row justify-between">
        <div className=" lg:w-3/4">
          <h2 className="text-2xl py-4">{product.name}</h2>
          <p className=" text-gray-500 pl-8">{product.introduction}</p>
          <p className=" my-8 text-justify">{product.Ingredients}</p>
          <div className="w-full flex flex-col gap-y-3">
            <div>قیمت : {product.price} هزار تومان</div>
            <div>
              دسته بندی :{" "}
              {product.categories.map((item) => (
                <span>{item} ، </span>
              ))}
            </div>
            <div> تاریخ انقضا : {product.expiration}</div>
          </div>
        </div>
        <div className="w-full flex justify-center lg:w-1/4">
          <img className=" lg:w-full" src={product.image} alt="" />
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default DetailsPage;
