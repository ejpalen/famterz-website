import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../init";
import { useNavigate, NavLink } from "react-router-dom";
import accountBg from "../images/accountBg.jpg";
import "../styles/account.css";
import "../styles/contact.css";

const LogInAccount = (props) => {
  const history = useNavigate();
  const [user, setUser] = useState({});
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      history("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return user ? (
    history("/profile")
  ) : (
    <div className="contact-container">
      <div className="contact account">
        <div
          className="contact-left bg"
          style={{ backgroundImage: `url(${accountBg})` }}
        >
          <h1>Login to your Account</h1>
          <p>Discover exclusive content and offers reserved just for you.</p>
        </div>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="email"
                required
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
            </div>
            <input
              type="submit"
              className="submit"
              value="Log in"
              onClick={login}
            />
            <NavLink to="/register-account">
              <h2>
                Don't have an account yet? <u>Register</u>
              </h2>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInAccount;
