import React from "react";
import Ads from "../components/Ads";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useBlogs } from "../context/BlogsContext";
import BlogItem from "../components/BlogItem";

function Blogs() {
  const blogs = useBlogs();
console.log(blogs);

  return (
    <div>
      <Ads />
      <Navbar />
      <div className=" container mx-auto p-8 xl:max-w-[1240px]">{blogs.map(item=>(<BlogItem data={item}/>))}</div>
      <Footer />
    </div>
  );
}

export default Blogs;
