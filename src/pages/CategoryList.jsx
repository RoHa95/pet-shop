import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import Card from "../components/Card";
import Ads from "../components/Ads";
import Navbar from "../components/Navbar";
function CategoryList(props) {
  const products = useProducts();
  const help = [
    { id: 1, concept: ["غذای سگ", "غذای گربه"], title: "انواع غذای خشک" },
    { id: 2, concept: ["غذای سگ"], title: "غذای سگ نژاد جونیور" },
    { id: 3, concept: ["کنسرو و پوچ سگ"], title: "انواع کنسرو برای سگ" },
    {
      id: 4,
      concept: ["مکمل غذایی سگ", "مکمل غذایی گربه"],
      title: "قرص و پودر های مولتی ویتامین",
    },
  ];
  const { id } = useParams();
  const finalresult = [];
  // what is my search category title
  const result = help.filter((item) => item.id == +id);
  const search = result[0].concept;
  // ***************
  // search our products of category
  search.forEach((item) => {
    finalresult.push(products.filter((x) => x.categories.includes(item)));
  });
  console.log(finalresult.flat(2));
  // export products result
  const productsToShow = finalresult.flat(2);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Ads />
      <Navbar />

      <div className="  container mx-auto px-8  my-10 xl:max-w-[1240px]">
        <h3 className=" text-3xl mb-8 font-bold border-b-2 w-fit py-2 border-b-orange-500">
          {result[0].title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
          {productsToShow.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
