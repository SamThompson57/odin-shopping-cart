import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

const RouteSwitch = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
    );
  };
  
  export default RouteSwitch;