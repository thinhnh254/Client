import {
  faApple,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo-main.png";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="form-login">
        <img src={logoImage} alt="logo" className="logo" />
        <br />
        <h1 className="login">Login</h1>
        <p className="sub-text">Hello, Login to continue !</p>
        <p className="sub-text">
          Or{" "}
          <Link to="/register" className="sub-link">
            Register new account
          </Link>
        </p>
        <div className="form-group">
          <input
            type="text"
            value={email}
            onChange={handleOnChangeEmail}
            placeholder="Your email"
            className="input-text"
          />
          <input
            type="password"
            valuse={password}
            onChange={handleOnChangePassword}
            placeholder="Your password"
            className="input-text"
          />
          {<span className="error">error</span>}

          <button>Login</button>
        </div>

        <p className="forgotPwd">
          <a href="#">Forgot Password</a>
        </p>
        <div className="or">
          <span className="abs-text">Or</span>
          <hr />
        </div>
        <br />
        <div className="icon">
          {/* Facebook Icon */}
          <FontAwesomeIcon icon={faFacebook} className="fb" />

          {/* Apple Icon */}
          <FontAwesomeIcon icon={faApple} className="apple" />

          {/* Twitter Icon */}
          <FontAwesomeIcon icon={faTwitter} className="tw" />

          {/* Google Icon */}
          <FontAwesomeIcon icon={faGoogle} className="gg" />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
