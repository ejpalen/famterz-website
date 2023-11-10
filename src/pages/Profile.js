import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../init";

import BrowseProductsHeader from "../components/BrowseProductsHeader";

import Footer from "../components/footer";
import "../styles/browseProducts.css";
import "../styles/main.css";
import "../styles/contact.css";

const Profile = () => {
  const history = useNavigate();
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    history("/account");
    window.location.reload();
  };

  return (
    <>
      <div className="BrowseProducts cart">
        <BrowseProductsHeader title="Profile" />
        <div className="cart-container">
          <div className="profile-details">
            <h1>Email: {user?.email}</h1>
            <button className="submit" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
