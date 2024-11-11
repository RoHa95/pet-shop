import React, { useContext } from "react";
import { ProductsContext, useProducts } from "../context/ProductsContext";
import Navbar from "../components/Navbar";
import Ads from "../components/Ads";

function Home() {
  const products = useProducts();
  console.log(products);
   return(
    <>
    <Ads/>
    <Navbar/>
    </>

   )
}

export default Home;
