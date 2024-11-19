import React from "react";
import { useBlogs } from "../context/BlogsContext";
import CardBlog from "./CardBlog";
function BlogSection() {
  const blogs = useBlogs();
  console.log(blogs);
  
  return (
    <div className="container mx-auto px-8 xl:max-w-[1240px] mt-24 flex flex-col md:flex-row items-center justify-between gap-x-4 xl:gap-x-8">
        {blogs.map(item=>(
            <CardBlog key={item.id} data={item}/>
        ))}
    </div>
  );
}

export default BlogSection;
