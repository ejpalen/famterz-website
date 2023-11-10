import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import BrowseProductsHeader from "../components/BrowseProductsHeader";
import BrowseProductsItems from "../components/BrowseProductsItems";
import Footer from "../components/footer";
import CartQuantityCounter from "../components/CartQuantityCounter";
import "../styles/browseProducts.css";
import "../styles/main.css";
import "../styles/cart.css";
import "../styles/payment.css";

import paypal from "../images/payment-paypal-logo.png";
import visa from "../images/payment-visa-logo.png";
import mastercard from "../images/payment-mastercard-logo.png";
import amex from "../images/payment-amex-logo.png";
import applepay from "../images/payment-applepay-logo.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Products } from "../Products";

const Payment = () => {
  const history = useNavigate();
  const allProducts = Products();
  const [products, setProducts] = useState(allProducts);
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      const product = products.find((p) => p.id === item.id);
      total += product.price * item.quantity;
    }
    return total.toFixed(2);
  };

  const total = calculateTotal();

  const notify = () => {
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
  return !cartItems || cartItems.length === 0 ? (
    history("/cart")
  ) : (
    <>
      <div className="BrowseProducts cart payment">
        <BrowseProductsHeader title="Payment" />
        <div className="cart-wrapper">
          <h1 className="checkout-header">Checkout Details</h1>
          <div className="cart-container">
            <div className="checkout-details">
              <form>
                <h2>Contact Information</h2>
                <div className="input-column">
                  <div className="input">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="from_fname" required />
                  </div>
                  <div className="input">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="from_lname" required />
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="">Email</label>
                  <input type="email" name="email" required />
                </div>
                <div className="input">
                  <label htmlFor="">Contact Number</label>
                  <input type="tel" name="" id="" />
                </div>
                <h2>Shipping Address</h2>
                <div className="input">
                  <label htmlFor="">Address</label>
                  <input type="email" name="email" required />
                </div>
                <h2>Shipping Method</h2>
                <div class="input input-radio">
                  <div class="radio">
                    <input id="standard" type="radio" value="Standard" />
                    <label for="standard">Standard</label>
                  </div>
                  <div class="shipprice">
                    <p>$30.00</p>
                  </div>
                </div>
                <h2>Payment Method</h2>
                <div className="input-radio-container">
                  <div class="input input-radio">
                    <div class="radio">
                      <input id="paypal" type="radio" name="payment-method" />
                      <img src={paypal} alt="" />
                      <label for="paypal">Paypal</label>
                    </div>
                  </div>
                  <div class="input input-radio">
                    <div class="radio">
                      <input id="visa" type="radio" name="payment-method" />
                      <img src={visa} alt="" />
                      <label for="visa">Visa</label>
                    </div>
                  </div>
                  <div class="input input-radio">
                    <div class="radio">
                      <input
                        id="mastercard"
                        type="radio"
                        name="payment-method"
                      />
                      <img src={mastercard} alt="" />
                      <label for="mastercard">Mastercard</label>
                    </div>
                  </div>
                  <div class="input input-radio">
                    <div class="radio">
                      <input
                        id="amex"
                        type="radio"
                        name="payment-method"
                        value="Standard"
                      />
                      <img src={amex} alt="" />
                      <label for="amex">Amex</label>
                    </div>
                  </div>
                  <div class="input input-radio">
                    <div class="radio">
                      <input
                        id="applepay"
                        type="radio"
                        name="payment-method"
                        value="Standard"
                      />
                      <img src={applepay} alt="" />
                      <label for="applepay">Apple Pay</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="cart-summary">
              <div className="cart-items">
                {!cartItems || cartItems.length === 0 ? (
                  <h1>Cart is empty...</h1>
                ) : (
                  cartItems.map((cartItem, index) => {
                    // Find the product that matches the item in the cart
                    const product = products.find((p) => p.id === cartItem.id);

                    return (
                      <div className="item" key={index}>
                        <div className="item-description">
                          <img src={product.image.mainImage} alt="" />
                          <div className="item-description-text">
                            <h2>{product.name}</h2>
                            <p>
                              ${(product.price * cartItem.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="item-right">
                          Qty: {cartItem.quantity}x
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              <div className="sub-total">
                <p>Subtotal:</p>
                <h2>${calculateTotal()}</h2>
              </div>
              <div className="sub-total">
                <h2>Total</h2>
                <h1>${(parseInt(total) + 30).toFixed(2)}</h1>
              </div>
              <button onClick={notify}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Payment;
