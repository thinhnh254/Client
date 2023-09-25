import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./FooterComponent.scss";

const FooterComponent = () => {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={["fas", "faUser"]} />
          <h3>FATMe</h3>
          <p>
            Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
            Laudantium?
          </p>
          <div className="share">
            <Link className="social" to="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </Link>
            <Link className="social" to="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </Link>
            <Link className="social" to="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </Link>
            <Link className="social" to="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </Link>
          </div>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <Link to="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +123 456 7890
          </Link>
          <Link to="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +111 222 3333
          </Link>
          <Link to="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            name@email.com
          </Link>
          <Link to="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            DaNang, VietNam
          </Link>
        </div>
        <div className="box">
          <h3>quick info</h3>
          <Link to="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            home
          </Link>
          <Link to="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            shop
          </Link>
          <Link to="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            about
          </Link>
          <Link to="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            blog
          </Link>
          <Link to="#reviews" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            review
          </Link>
          <Link to="#blogs" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            contact
          </Link>
        </div>
        <div className="box">
          <h3>newsletter</h3>
          <p>Subscribe For Latest Updates</p>
          <input type="text" placeholder="your email" />
          <button type="button" className="btn">
            subscribe
          </button>
          <img src="image/payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
