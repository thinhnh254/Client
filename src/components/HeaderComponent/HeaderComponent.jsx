import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import toggleClose from "../../assets/menu-close.png";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="navigation">
          <img src={logoImage} alt="logo" className="logo" />
          <input type="checkbox" className="toggle-check" />
          <ul className="menu">
            <div className="menu-item toggle-close">
              <label htmlFor="toggle-check">
                <img src={toggleClose} alt="Close" />
              </label>
            </div>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Trang chủ
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Món ăn
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Blog
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="#">
                Dịch vụ
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-link" to="/order">
                Liên hệ
              </Link>
            </li>
            <li className="auth">
              <Link className="button-login" to="#">
                Đăng nhập
              </Link>
              <Link className="button-signup" to="#">
                Đăng ký
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
