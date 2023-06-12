import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Testimoni from "../pages/Testimoni";
import Dashboard from "../components/Dashboard";
import About from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimoni" element={<Testimoni />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
};

export default Router;
