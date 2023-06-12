import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
  const CustomNavbar = () => {
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
    const callAnnual = () => {
      navigate("/report");
    };
    const callContact = () => {
      navigate("/contact");
    };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ width: "1350px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://seeklogo.com/images/M/mcdonald-s-logo-0D95A820B2-seeklogo.com.png"
            alt=""
            style={{ width: "50px", height: "40px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" onClick={callHome}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={callAbout}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/product" onClick={callProduct}>
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/report" onClick={callAnnual}>
              Annual Report
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={callContact}>
              Contact Us
            </Nav.Link>
          </Nav>
          
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
