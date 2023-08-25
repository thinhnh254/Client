import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faTrashCan,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import food from "../../assets/bunvit.png";
import logoImage from "../../assets/logo.png";
import "./HeaderComponent.scss";

const HeaderComponent = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isActiveCart, setIsActiveCart] = useState(false);
  const [isActiveAuth, setIsActiveAuth] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleSearchClick = () => {
    setIsActiveSearch((prevIsActive) => !prevIsActive);
    setIsActiveCart(false);
    setIsActiveAuth(false);
    setIsActiveMenu(false);
  };

  const handleCartClick = () => {
    setIsActiveCart((prevIsActive) => !prevIsActive);
    setIsActiveSearch(false);
    setIsActiveAuth(false);
    setIsActiveMenu(false);
  };

  const handleAuthClick = () => {
    setIsActiveAuth((prevIsActive) => !prevIsActive);
    setIsActiveSearch(false);
    setIsActiveCart(false);
    setIsActiveMenu(false);
  };

  const handleMenuClick = () => {
    setIsActiveMenu((prevIsActive) => !prevIsActive);
    setIsActiveSearch(false);
    setIsActiveCart(false);
    setIsActiveAuth(false);
  };

  return (
    <header className="header">
      {/* Logo */}
      <Link className="logo" to={"#"}>
        <img src={logoImage} alt="logo" />
      </Link>

      {/* Navbar */}
      <nav className={`navbar ${isActiveMenu ? "active" : ""}`}>
        <Link className="menu-link" to={"#"}>
          Home
        </Link>
        <Link className="menu-link" to={"#"}>
          Shop
        </Link>
        <Link className="menu-link" to={"#"}>
          About
        </Link>
        <Link className="menu-link" to={"#"}>
          Review
        </Link>
        <Link className="menu-link" to={"#"}>
          Blog
        </Link>
        <Link className="menu-link" to={"#"}>
          Contact
        </Link>
      </nav>

      {/* Icons */}
      <div className="icons">
        {/* Menu Icon */}
        <div className="items" id="menu-btn" onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Search Icon */}
        <div className="items" id="search-btn" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        {/* Cart Icon */}
        <div className="items" id="cart-btn" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>

        {/* Auth Icon */}
        <div className="items" id="user-btn" onClick={handleAuthClick}>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      {/* search form */}
      <form
        action=""
        className={`search-form ${isActiveSearch ? "active" : ""}`}
      >
        <input type="search" placeholder="search here..." id="search-box" />
        <label htmlFor="search-box" className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
      </form>

      {/* shopping-cart */}
      <div className={`shopping-cart ${isActiveCart ? "active" : ""}`}>
        <div className="box">
          <FontAwesomeIcon icon={faTrashCan} className="trash" />
          <img src={food} alt="food" />
          <div className="content">
            <h3>organic food</h3>
            <span className="quantity">1</span>
            <span className="multiply">x</span>
            <span className="pice">$18.99</span>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faTrashCan} className="trash" />
          <img src={food} alt="food" />
          <div className="content">
            <h3>organic food</h3>
            <span className="quantity">1</span>
            <span className="multiply">1</span>
            <span className="pice">$18.99</span>
          </div>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faTrashCan} className="trash" />
          <img src={food} alt="food" />
          <div className="content">
            <h3>organic food</h3>
            <span className="quantity">1</span>
            <span className="multiply">1</span>
            <span className="pice">$18.99</span>
          </div>
        </div>
        <h3 className="total">
          total: <span>56.97</span>
        </h3>
        <Link to={"#"} className="btn">
          checkout
        </Link>
      </div>

      {/* auth form */}
      <form action="" className={`auth-form ${isActiveAuth ? "active" : ""}`}>
        <h3>auth form</h3>
      </form>
    </header>
  );
};

export default HeaderComponent;
