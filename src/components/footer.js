import logoV2 from "../images/logoV2.png";
import phoneIcon from "../images/phone-icon.png";
import emailIcon from "../images/email-icon.png";
import arrow from "../images/right-arrow-icon.png";
import paypal from "../images/payment-paypal-logo.png";
import visa from "../images/payment-visa-logo.png";
import mastercard from "../images/payment-mastercard-logo.png";
import amex from "../images/payment-amex-logo.png";
import applepay from "../images/payment-applepay-logo.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const footerCTA = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const notifya = () => {
    toast.info("This feature is not available at the moment", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="footer-container">
      <footer>
        <div className="footer-column">
          <div className="footer-title">
            <img src={logoV2} alt="" className="logoV2" />
          </div>
          <div className="footer-contents">
            <div className="footer-contact">
              <img src={phoneIcon} alt="" />
              <p>+13158254039</p>
            </div>
            <div className="footer-contact">
              <img src={emailIcon} alt="" />
              <a href="mailto:we.universe@famterz.com">
                we.universe@famterz.com
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-title">
            <h2>Customer Care</h2>
          </div>
          <div className="footer-contents">
            <NavLink to="/">Be Our Brand Partner</NavLink>
            <NavLink to="/">Frequently Asked Questions</NavLink>
            <NavLink to="/">Track Your Cash on Delivery Order</NavLink>
            <NavLink to="/">How to Buy</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-title">
            <h2>Newsletter</h2>
          </div>
          <div className="footer-contents">
            <p>GET $10 OFF: SIGN UP AND RECEIVE COUPON FOR 1ST TIME CUSTOMER</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Email" />
              <button type="submit" onClick={notifya}>
                <img src={arrow} alt="" />
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </footer>
      <div className="footer-bottom">
        <p>© 2023, FAMTERz</p>
        <div className="payment">
          <img src={paypal} alt="" />
          <img src={visa} alt="" />
          <img src={mastercard} alt="" />
          <img src={amex} alt="" />
          <img src={applepay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default footerCTA;
