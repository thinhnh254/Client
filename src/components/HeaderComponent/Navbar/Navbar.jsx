import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ active }) => {
  return (
    <nav className={`navbar ${active ? "active" : ""}`}>
      <Link className="link" to="/">
        home
      </Link>
      <Link className="link" to="/shop">
        shop
      </Link>
      <Link className="link" to="/about">
        about
      </Link>
      <Link className="link" to="/blog">
        blog
      </Link>
      <Link className="link" to="/review">
        review
      </Link>
      <Link className="link" to="/contact">
        contact
      </Link>
    </nav>
  );
};

Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;

export default Navbar;
