import React, { useEffect } from 'react'
import { useProducts } from '../context/ProductsContext';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Ads from "../components/Ads"
function Products() {
  
    const products = useProducts();
    useEffect(() => {
      window.scroll(0, 0);
    }, []);

    return (
      <div className=" flex flex-col">
        <Ads/>
        <Navbar />
        <div className=" container flex-grow mx-auto px-8  my-10 xl:max-w-[1240px]">
        <h3 className=" text-3xl mb-8 font-bold border-b-2 w-fit py-2 border-b-orange-500">
        جدیدترین محصولات
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
          {products.length ===0 ?(<p>مورد پسندی وجود ندارد</p>): (products.map((item) => (
            <Card key={item.id} data={item} />
          )))}
          </div>
        </div>
        <Footer />
      </div>
    );
  
}

export default Products