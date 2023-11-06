import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../apis/user";
import logoImage from "../../assets/Logo-main.png";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await register(email, firstName, lastName, password);

      if (response.success) {
        setError(response.message);
        setTimeout(() => {
          navigate("/login"); // Navigate to the home page route
        }, 3000); // 3000 milliseconds (3 seconds)
      } else {
        setError(response.message);
      }
      // Handle the response, e.g., store token, user info, etc.
      console.log("Register successful:", response);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // If the backend provided an error message, update the error state
        setError(error.response.data.error);
      } else {
        setError("An error occurred during register"); // Fallback message if no specific error message from backend
      }
      console.error("Error during register:", error);
    }
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
            value={firstName}
            onChange={handleOnChangeFirstName}
            placeholder="Your firstname"
            className="input-text"
          />
          <input
            type="text"
            value={lastName}
            onChange={handleOnChangeLastName}
            placeholder="Your lastname"
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
          {error && <span className="error">{error}</span>}

          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
