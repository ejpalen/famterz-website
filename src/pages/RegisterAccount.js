import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../init";
import "../styles/account.css";
import "../styles/contact.css";
import accountBg from "../images/accountBg.jpg";

const RegisterAccount = (props) => {
  const history = useNavigate();
  const [user, setUser] = useState({});
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
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
          <h1>Register Account</h1>
          <p>Begin your journey with us by creating your own account.</p>
        </div>
        <div className="contact-right">
          <form>
            <div className="input">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="password"
                required
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>
            <input
              type="submit"
              className="submit"
              value="Register"
              onClick={register}
            />
            <NavLink to="/account">
              <h2>
                Already have an account? <u>Log in</u>
              </h2>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAccount;
