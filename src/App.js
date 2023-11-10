import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/main.css";
import "./styles/productView.css";
import Homepage from "./pages/homepage";
import BrowseProducts from "./pages/BrowseProducts";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RegisterAccount from "./pages/RegisterAccount";
import LoginAccount from "./pages/LoginAccount";
import NavBar from "./components/navBar";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";

function App() {
  const isContact =
    window.location.pathname.startsWith("/contact") ||
    window.location.pathname.startsWith("/account") ||
    window.location.pathname.startsWith("/register-account");

  return (
    <Router>
      <div className={`App ${isContact ? "isContact" : ""}`}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/products" element={<BrowseProducts />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<LoginAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register-account" element={<RegisterAccount />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
