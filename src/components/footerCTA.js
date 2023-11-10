import arrow from "../images/right-arrow-icon.png";
import { NavLink } from "react-router-dom";

const footerCTA = (props) => {
  return (
    <div
      className="footerCTA-section bg"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="footerCTA-text">
        <h1>A UNIVERSE</h1>
        <h1>AT YOUR FINGERTIPS</h1>
        <NavLink to="/products" className="button-1 button">
          SHOP NOW
          <img src={arrow} alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default footerCTA;
