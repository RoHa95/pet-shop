import React from "react";

function BlogItem({ data }) {
  return (
    <div className="w-full flex items-center justify-start py-2 gap-x-2 cursor-pointer">
        <div>
            <img src={data.image} className="w-32" />
        </div>
        <div className="flex flex-col gap-y-2 ">
        <div className=" text-xl font-bold">{data.title}</div>
        <p className=" text-base text-gray-500">{data.introduction}</p>
        <div className="flex ic justify-start gap-x-3">
            <span className=" bg-orange-100 px-2 text-xs rounded-md text-orange-400">نویسنده : {data.author}</span>
            <span className=" bg-orange-100 px-2 text-xs rounded-md text-orange-400">تاریخ انتشار : {data.releasetime}</span>
        </div>
        </div>
        
      
    </div>
  );
}

export default BlogItem;
