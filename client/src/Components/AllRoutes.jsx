import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Routes>
        <Route to="/" element={<Home />}></Route>
      </Routes> */}
    </div>
  );
};

export default AllRoutes;
