import PropTypes from "prop-types";
import React from "react";
import "./Navbar.scss";

const Navbar = ({ active }) => {
  return (
    <nav className={`navbar ${active ? "active" : ""}`}>
      <a className="link" href="/">
        home
      </a>
      <a className="link" href="/shop">
        shop
      </a>
      <a className="link" href="/about">
        about
      </a>
      <a className="link" href="/blog">
        blog
      </a>
      <a className="link" href="/review">
        review
      </a>
      <a className="link" href="/contact">
        contact
      </a>
    </nav>
  );
};

Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;

export default Navbar;
