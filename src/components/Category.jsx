import React from "react";
import ads4 from "../assets/images/ads4.png";
import ads1 from "../assets/images/ads1.png";
import ads2 from "../assets/images/ads2.png";
import ads3 from "../assets/images/ads3.png";
import orange from "../assets/images/orange.png";
import pink from "../assets/images/pink.png";
import green from "../assets/images/green.png";
import violet from "../assets/images/violet.png";
import { Link } from "react-router-dom";
function Category() {
  return (
    <div className=" container w-screen flex flex-col gap-y-5 lg:gap-y-20 mx-auto px-8 xl:max-w-[1240px] my-10 md:my-16">
      <div className=" relative">
        <img src={ads4} alt="" />
        <img
          src={ads1}
          alt=""
          className="hidden lg:flex absolute top-4 left-10"
        />
        <img
          src={ads2}
          alt=""
          className="hidden lg:flex absolute top-6 left-1/3"
        />
        <img
          src={ads3}
          alt=""
          className="hidden lg:flex absolute -top-14 left-32"
        />
      </div>
      <div className=" flex items-center justify-between gap-x-5">
        <div>
          <Link to="/products">
            <img src={pink} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/products">
            <img src={green} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/products">
            <img src={orange} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/products">
            <img src={violet} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
