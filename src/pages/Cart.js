import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import BrowseProductsHeader from "../components/BrowseProductsHeader";
import Footer from "../components/footer";
import CartQuantityCounter from "../components/CartQuantityCounter";
import "../styles/browseProducts.css";
import "../styles/main.css";
import "../styles/cart.css";

import { Products } from "../Products";

const Cart = () => {
  const allProducts = Products();
  const [products, setProducts] = useState(allProducts);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    setProducts(products);
  }, []);

  const removeFromCart = (itemId) => {
    // Remove the item from cartItems
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      const product = products.find((p) => p.id === item.id);
      total += product.price * item.quantity;
    }
    return total.toFixed(2);
  };

  // Update the product item's quantity in the cart when the counter changes
  const updateProductQuantity = (newQuantity, itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <div className="BrowseProducts cart">
        <BrowseProductsHeader title="Cart" />
        {!cartItems || cartItems.length === 0 ? (
          <h1 className="empty-cart">Cart is empty...</h1>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cartItems.map((cartItem, index) => {
                // Find the product that matches the item in the cart
                const product = products.find((p) => p.id === cartItem.id);

                return (
                  <div className="item" key={index}>
                    <div className="item-description">
                      <img src={product.image.mainImage} alt="" />
                      <div className="item-description-text">
                        <h2>{product.name}</h2>
                        <p>${(product.price * cartItem.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="item-right">
                      <CartQuantityCounter
                        onQuantityChange={(newQuantity) =>
                          updateProductQuantity(newQuantity, product.id)
                        }
                        productQuantity={cartItem.quantity}
                        stock={product.stock}
                      />
                      <FontAwesomeIcon
                        className="delete-icon"
                        icon={faTrash}
                        onClick={() => removeFromCart(product.id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-summary">
              <h2>Total</h2>
              <h1>${calculateTotal()}</h1>
              <p>Shipment costs will be calculated at checkout.</p>
              <NavLink to="/payment">
                <button>Check Out</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
