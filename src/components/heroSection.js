import heroBg from "../images/heroBg.png";
import heroBgMobile from "../images/heroBg-Mobile.png";
import arrow from "../images/right-arrow-icon.png";
import { NavLink } from "react-router-dom";

const heroSection = () => {
  const isMobile = window.innerWidth <= 700;

  return (
    <div
      className="hero-container bg"
      style={{ backgroundImage: `url(${!isMobile ? heroBg : heroBgMobile})` }}
    >
      <div className="hero-text">
        <h1>DISCOVER THE COSMOS</h1>
        <h1>IN YOUR WORKSPACE</h1>
        <NavLink to="/products" className="button-1 button">
          SHOP NOW
          <img src={arrow} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default heroSection;
