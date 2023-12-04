import {
  faApple,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiLogin } from "../../apis/user";
import logoImage from "../../assets/Logo-main.png";
import { Loading } from "../../components";
import { showModal } from "../../store/app/appSlice";
import { login } from "../../store/user/userSlice";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      <Loading />;
      dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
      const response = await apiLogin(email, password);
      dispatch(showModal({ isShowModal: false, modalChildren: null }));
      if (response.success) {
        setError(response.message);
        toast.success("success");
        setTimeout(() => {
          dispatch(
            login({
              isLoggedIn: true,
              token: response.accessToken,
              userData: response.userData,
            })
          );
          navigate("/");
        }, 1000);
      } else {
        toast.error(response.message);
        setError(response.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // If the backend provided an error message, update the error state
        setError(error.response.data.error);
      } else {
        setError("An error occurred during login");
      }
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="container-bg">
      <div className="form-login">
        <Link className="logo" to={"/"}>
          <img src={logoImage} alt="logo" className="logo" />
        </Link>
        <br />
        <h1 className="login">Login</h1>
        <p className="sub-text">Hello, Login to continue !</p>
        <p className="sub-text">
          Or
          <Link to="/register" className="sub-link">
            Register new account
          </Link>
        </p>
        <div className="form-group">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Your email"
            className="input-text"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Your password"
            className="input-text"
          />
          {/* {<span className="error">error</span>} */}
          {error && <span className="error">{error}</span>}
          <button onClick={handleLogin}>Login</button>
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
