import React from "react";
import { useProducts } from "../context/ProductsContext";
import Navbar from "../components/Navbar";
import Ads from "../components/Ads";
import Banner from "../components/Banner";
import RecentlyProducts from "../components/RecentlyProducts";
import Category from "../components/Category";
import Lavazem from "../components/Lavazem";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

function Home() {
  const products = useProducts();
  // console.log(products);
   return(
    <>
    <Ads/>
    <Navbar/>
    <Banner/>
    <RecentlyProducts/>
    <Category/>
    <Lavazem/>
    <BlogSection/>
    <Footer/>
    </>

   )
}

export default Home;
