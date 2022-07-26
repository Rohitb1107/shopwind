import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Kids from "./Kids/Kids";
import Mens from "./Mens/Mens";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import SingleProdPage from "./SingleProPage/SingleProPage";
import Womens from "./Womens/Womens";
import CartPage from "./CartPage/CartPage";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<SingleProdPage />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
