import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/Home/ProductPage";
import { CartProvider } from "./context/CartContext.jsx"; // ✅ import CartProvider
import AllDishesPage from "./Pages/Home/AllDishesPage.jsx";
import CartPage from "./Pages/Home/CartPage.jsx";
import Header from "./Components/Layouts/Header.jsx";

function App() {
  return (
    <CartProvider> {/* ✅ Wrap entire app with provider */}
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<AllDishesPage />} /> {/* New All Dishes Page */}
          <Route path="/product/:id" element={<ProductPage />} /> {/* Existing Product Page */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
