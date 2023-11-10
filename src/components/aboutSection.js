import { NavLink } from "react-router-dom";

import aboutSectionImg from "../images/aboutSectionImg.png";
import arrow from "../images/right-arrow-icon.png";

const aboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-section-left">
        <img src={aboutSectionImg} alt="" />
      </div>
      <div className="about-section-right flex-column">
        <p>
          Welcome to <b>FAMTERz</b>, where we blend the enchantment of the
          cosmos with your digital realm. Explore a universe of creativity as we
          infuse celestial wonders into your everyday workspace through
          meticulously designed computer accessories.
        </p>
        <NavLink to="/products" className="button-1 button">
          SHOP NOW
          <img src={arrow} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default aboutSection;
