import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componets/Navbar/Topbar";
import Footer from "./Componets/Footer/Footer";
import Home from "./LinkPage/Home/HomePage";
import Menu from "./LinkPage/MenuPage/Menu";
import Order from "./LinkPage/OrderPage/OrderPage";
import Contact from "./LinkPage/Contact/ContactPage";
import NotFound from "./LinkPage/NotFoundPage/NotFound";
import Login from "./LinkPage/login";
import Signup from "./LinkPage/Signup";
import { CartProvider } from "./LinkPage/OrderPage/CartContext"; // Provides shared cart state

import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}
