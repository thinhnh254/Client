import React from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.scss";
import logoImage from "../../assets/Logo-main.png";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="form-register">
        <img src={logoImage} alt="logo" className="logo" />
        <br/>
        <h1 className="heading">Register</h1>
        <p className="sub-text">
          Already have account?{" "}
          <Link to="/login" className="sub-link">
            Login
          </Link>
        </p>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input-text"
          />
          <input
            type="text"
            name="username"
            placeholder="Your username"
            className="input-text"
          />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="input-text"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="input-text"
          />
          <br />
          <div className="terms">
            <input
              type="checkbox"
              name="check-box"
              className="input-checkbox"
              id="checkbox"
            />
            <label for="checkbox" className="sub-link">
              Accept terms and services
            </label>
          </div>
          <button>Register</button>
        </div>
        <span className="error">Error</span>
      </div>
    </div>
  );
};

export default RegisterPage;
