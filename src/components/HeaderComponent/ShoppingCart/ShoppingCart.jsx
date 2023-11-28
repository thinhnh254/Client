import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import food from "../../../assets/bunvit.png";
import "./ShoppingCart.scss";

const ShoppingCart = ({ active }) => (
  <div className={`shopping-cart ${active ? "active" : ""}`}>
    <div className="box">
      <FontAwesomeIcon className="trash-icon" icon={faTrash} />
      <img src={food} alt="Product" />
      <div className="content">
        <h3>watermelon</h3>
        <span className="price">$4.99</span>
        <span className="quantity">qty: 1</span>
      </div>
    </div>
    <div className="box">
      <FontAwesomeIcon className="trash-icon" icon={faTrash} />
      <img src={food} alt="Product" />
      <div className="content">
        <h3>onion</h3>
        <span className="price">$4.99</span>
        <span className="quantity">qty: 1</span>
      </div>
    </div>
    <div className="box">
      <FontAwesomeIcon className="trash-icon" icon={faTrash} />
      <img src={food} alt="Product" />
      <div className="content">
        <h3>chicken</h3>
        <span className="price">$4.99</span>
        <span className="quantity">qty: 1</span>
      </div>
    </div>
    <div className="btn">check out</div>
  </div>
);

ShoppingCart.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ShoppingCart;
