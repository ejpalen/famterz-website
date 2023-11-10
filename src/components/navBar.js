import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.png";
import profileIcon from "../images/profile-icon.png";
import cartIcon from "../images/cart-icon.png";
import burgerIcon from "../images/burger-icon.png";
import closeIcon from "../images/close-icon.png";

const NavBar = () => {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Check if the current URL is exactly "/"
  const isHome =
    location.pathname.startsWith("/product/") ||
    location.pathname.startsWith("/contact") ||
    location.pathname.startsWith("/account") ||
    location.pathname.startsWith("/register-account");
  return (
    <nav className={`${isHome ? "isNotHome" : ""} ${showNavbar && "active"}`}>
      <div className="nav-left">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <img
        className="hamburger"
        src={showNavbar ? closeIcon : burgerIcon}
        alt=""
        onClick={handleShowNavbar}
      />
      <div className={`nav-right  ${showNavbar && "active"}`}>
        <div className="nav-right-left">
          <NavLink to="/products">Browse All Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="nav-right-right">
          <NavLink to="/cart">
            <img src={cartIcon} alt="" />
          </NavLink>
          <NavLink to="/account">
            <img src={profileIcon} alt="" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
