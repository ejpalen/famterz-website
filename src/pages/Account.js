import React, { useRef, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import contactImg from "../images/BrowseProductsHeader.png";
import "../styles/account.css";
import "../styles/contact.css";
import { auth } from "../init";

const Account = () => {
  const history = useNavigate();

  const [isRegisterMode, setIsRegisterMode] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleAccountStateChange = (registerMode) => {
    setIsRegisterMode(registerMode);
  };

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
    <>
      <div className="contact-container">
        <div className="contact account">
          <div
            className="contact-left bg"
            style={{ backgroundImage: `url(${contactImg})` }}
          >
            <h1>
              {!isRegisterMode ? "Register Account" : "Log in to your Account"}
            </h1>
            <p>
              If you have any inquiries or face any difficulty, we will respond
              to you as soon as possible.
            </p>
          </div>
          <div>
            <div>
              {isRegisterMode ? (
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
                  </form>
                  <button
                    onClick={() => handleAccountStateChange(!isRegisterMode)}
                  >
                    <h2>
                      {isRegisterMode
                        ? "Register Account"
                        : "Login to Your Account"}
                    </h2>
                  </button>
                </div>
              ) : (
                <div className="contact-right">
                  <form onSubmit={handleSubmit}>
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
                  </form>
                  <button
                    onClick={() => handleAccountStateChange(!isRegisterMode)}
                  >
                    <h2>
                      {isRegisterMode
                        ? "Register Account"
                        : "Login to Your Account"}
                    </h2>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
