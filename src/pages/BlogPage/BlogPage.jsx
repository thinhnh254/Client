import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import blog from "../../assets/blog12.jpg";
import "./BlogPage.scss";

const BlogPage = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>blogs</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src={blog} alt="" />
          <div className="content">
            <div className="icons">
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </Link>
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </Link>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam,
              Expedita.
            </p>
            <Link to="/" className="btn">
              read more
            </Link>
          </div>
        </div>
        <div className="box">
          <img src={blog} alt="" />
          <div className="content">
            <div className="icons">
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </Link>
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </Link>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam,
              Expedita.
            </p>
            <Link to="/" className="btn">
              read more
            </Link>
          </div>
        </div>
        <div className="box">
          <img src={blog} alt="" />
          <div className="content">
            <div className="icons">
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </Link>
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </Link>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam,
              Expedita.
            </p>
            <Link to="/" className="btn">
              read more
            </Link>
          </div>
        </div>

        <div className="box">
          <img src={blog} alt="" />
          <div className="content">
            <div className="icons">
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </Link>
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </Link>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam,
              Expedita.
            </p>
            <Link to="/" className="btn">
              read more
            </Link>
          </div>
        </div>

        <div className="box">
          <img src={blog} alt="" />
          <div className="content">
            <div className="icons">
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </Link>
              <Link to="/" className="icons-link">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </Link>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam,
              Expedita.
            </p>
            <Link to="/" className="btn">
              read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
