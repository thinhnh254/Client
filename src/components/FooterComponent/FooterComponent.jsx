import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./FooterComponent.scss";

const FooterComponent = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick links</h3>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Home
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Shop
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            About
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Review
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Blog
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Contact
          </Link>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            My Order
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            My Favorite
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            My Wishlist
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            My Account
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Term Of Use
          </Link>
          <Link className="menu-footer" to={"#"}>
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Contact
          </Link>
        </div>

        <div className="box">
          <h3>Follow us</h3>
          <Link to={"#"} className="menu-footer">
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Facebook
          </Link>
          <Link to={"#"} className="menu-footer">
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Instagram
          </Link>
          <Link to={"#"} className="menu-footer">
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            X-Twitter
          </Link>
          <Link to={"#"} className="menu-footer">
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Linkedin
          </Link>
          <Link to={"#"} className="menu-footer">
            <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            Printerest
          </Link>
        </div>

        <div className="box">
          <h3>Newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input type="email" placeholder="enter your email" />
            <input type="submit" value="subscribe" className="btn" />
          </form>
          {/* <img src={ } className="payment" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
