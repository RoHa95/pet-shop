import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCard } from "../context/CardContext";
import Card from "../components/Card";
import Ads from "../components/Ads"
function FavoriteProducts() {
  const [state] = useCard();
  return (
    <div>
      <Ads/>
      <Navbar />
      <div className=" container flex-grow mx-auto px-8  my-10 xl:max-w-[1240px]">
      <h3 className=" text-3xl mb-8 font-bold border-b-2 w-fit py-2 border-b-orange-500">
          محصولات مورد پسند
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
        {state.likedItems.length ===0 ?(<p>مورد پسندی وجود ندارد</p>): (state.likedItems.map((item) => (
          <Card key={item.id} data={item} />
        )))}
        {/* {
          state.likedItems.map((item) => (
            <Card key={item.id} data={item} />
          ))
        } */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FavoriteProducts;
