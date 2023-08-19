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
  const [isActiveUser, setIsActiveUser] = useState(false);

  const handleToggleSearch = () => {
    setIsActiveSearch((prevVisible) => !prevVisible);
  };

  const handleToggleCart = () => {
    setIsActiveCart((prevVisible) => !prevVisible);
  };

  const handleToggleUser = () => {
    setIsActiveUser((prevVisible) => !prevVisible);
  };

  // const user = useSelector((state) => state.user);
  // console.log("user: ", user);
  return (
    <header className="header">
      {/* Logo */}
      <Link className="logo" to={"#"}>
        <img src={logoImage} alt="logo" />
      </Link>

      {/* Navbar */}
      <nav className="navbar">
        <Link className="menu-link" to={"#"}>
          Home
        </Link>
        <Link className="menu-link" to={"#"}>
          Food
        </Link>
        <Link className="menu-link" to={"#"}>
          Blogs
        </Link>
        <Link className="menu-link" to={"#"}>
          Service
        </Link>
        <Link className="menu-link" to={"#"}>
          Contact
        </Link>
      </nav>

      {/* Icons */}
      <div className="icons">
        {/* Menu Icon */}
        <div className="items" id="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* Search Icon */}
        <div className="items" id="search-btn" onClick={handleToggleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        {/* Search Form */}
        {isActiveSearch && (
          <form action="" className={"search-form"}>
            <input type="search" id="search-box" placeholder="Search here..." />
            <label for="search-box" className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
          </form>
        )}

        {/* Cart Icon */}
        <div className="items" id="cart-btn" onClick={handleToggleCart}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        {/* Cart Form */}
        {isActiveCart && (
          <form className="shopping-cart">
            <div className="box">
              <FontAwesomeIcon icon={faTrashCan} className="trash" />
              <img src={food} alt="food" className="food" />
              <div className="content">
                <h3>Noddles</h3>
                <span className="price">$4.99</span>
                <span className="quantity">qty: 1</span>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faTrashCan} className="trash" />
              <img src={food} alt="food" className="food" />
              <div className="content">
                <h3>Noddles</h3>
                <span className="price">$4.99</span>
                <span className="quantity">qty: 1</span>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faTrashCan} className="trash" />
              <img src={food} alt="food" className="food" />
              <div className="content">
                <h3>Noddles</h3>
                <span className="price">$4.99</span>
                <span className="quantity">qty: 1</span>
              </div>
            </div>
            <div className="total">Total: $4.99</div>
            <Link to={"#"} className="btn">
              checkout
            </Link>
          </form>
        )}

        {/* User Icon */}
        <div className="items" id="user-btn" onClick={handleToggleUser}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        {/* User Form */}
        {isActiveUser && (
          <form action="" className="user-form">
            <h3>Your Name</h3>
          </form>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
