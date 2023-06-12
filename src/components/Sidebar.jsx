import { Button } from "bootstrap";
import { Nav } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Home from "../pages/HomePage";
import Product from "../pages/ProductPage";
import About from "../pages/AboutPage";

const Sidebar = () => {
  const navigate = useNavigate();

  const callHome = () => {
    navigate("/home");
  };
  const callProduct = () => {
    navigate("/product");
  };
  const callAbout = () => {
    navigate("/about");
  };

  return (
    <Nav style={{ display: "block" }}>
      <Nav.Link as={Link} to="/home" onClick={callHome}>
        Home
      </Nav.Link>
      {Home}
      <Nav.Link as={Link} to="/product" onClick={callProduct}>
        Product
      </Nav.Link>
      {Product}
      <Nav.Link as={Link} to="/about" onClick={callAbout}>
        About
      </Nav.Link>
      {About}
    </Nav>
  );
};

export default Sidebar;
