import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import ProductsProvider, { ProductsContext } from "./context/ProductsContext";
function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
