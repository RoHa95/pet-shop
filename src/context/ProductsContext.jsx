import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await api.get("/data");
        setProducts(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{products,setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
}
const useProducts = ()=>{
  const {products} = useContext(ProductsContext);
  return products;
}

export {useProducts};
export default ProductsProvider;
