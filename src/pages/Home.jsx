import React, { useContext } from "react";
import { ProductsContext, useProducts } from "../context/ProductsContext";
import Navbar from "../components/Navbar";
import Ads from "../components/Ads";
import Banner from "../components/Banner";
import RecentlyProducts from "../components/RecentlyProducts";

function Home() {
  const products = useProducts();
  console.log(products);
   return(
    <>
    <Ads/>
    <Navbar/>
    <Banner/>
    <RecentlyProducts/>
    </>

   )
}

export default Home;
