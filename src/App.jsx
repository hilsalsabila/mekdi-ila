import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Testimoni from "./pages/Testimoni";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import Router from "./Routers.jsx/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
