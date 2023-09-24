import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo-main.png";
import Loading from "../../components/LoadingComponent/Loading";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="form-register">
        <img src={logoImage} alt="logo" className="logo" />
        <br />
        <h1 className="register">Register</h1>
        <p className="sub-text">
          Already have account?{" "}
          <Link to="/login" className="sub-link">
            Login
          </Link>
        </p>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={handleOnChangeEmail}
            placeholder="Your email"
            className="input-text"
          />
          <input
            type="text"
            value={name}
            onChange={handleOnChangeName}
            placeholder="Your username"
            className="input-text"
          />
          <input
            type="password"
            valuse={password}
            onChange={handleOnChangePassword}
            placeholder="Your password"
            className="input-text"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={handleOnChangeConfirmPassword}
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
            <label htmlFor="checkbox" className="sub-link">
              Accept terms and services
            </label>
          </div>
          {<span className="error">error</span>}
          <Loading>
            <button>Register</button>
          </Loading>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
