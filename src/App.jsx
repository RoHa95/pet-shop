import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductsProvider, { ProductsContext } from "./context/ProductsContext";
import Products from "./pages/Products";
import CategoryList from "./pages/CategoryList";
import BlogsProvider from "./context/BlogsContext";
import CardProvider from "./context/CardContext";
import FavoriteProducts from "./pages/FavoriteProducts";
import AuthPage from "./pages/AuthPage";
import DetailsPage from "./pages/DetailsPage";
import ShoppingCart from "./pages/ShoppingCart";
function App() {
  return (
    <CardProvider>
      <ProductsProvider>
        <BlogsProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/category/:id" element={<CategoryList />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/favoriteProducts" element={<FavoriteProducts />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BlogsProvider>
      </ProductsProvider>
    </CardProvider>
  );
}

export default App;
