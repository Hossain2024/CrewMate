// AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateCrewmate from "./CreateCrewmate";
import Gallery from "./Gallery";

const AppRoutes= () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreateCrewmate />} />
    <Route path="/gallery" element={<Gallery/>} />
  </Routes>
);

export default AppRoutes;
