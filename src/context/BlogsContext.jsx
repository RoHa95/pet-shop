import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const BlogsContext = createContext();

function BlogsProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await api.get("/blog");
        setBlogs(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBlogs();
  }, []);
  return <BlogsContext.Provider value={{blogs, setBlogs}}>{children}</BlogsContext.Provider>;
}

const useBlogs = ()=>{
    const {blogs} = useContext(BlogsContext);
    return blogs;
}
export {useBlogs};
export default BlogsProvider;
