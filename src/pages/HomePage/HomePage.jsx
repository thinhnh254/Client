import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import food1 from "../../assets/2minegga.png";
import food2 from "../../assets/3miengca.png";
import food3 from "../../assets/5miengga.png";
import banner1 from "../../assets/icon-food.png";
import delivery from "../../assets/icon-delivery.png";
import "./HomePage.scss";
import { useSelector } from "react-redux";

const HomePage = () => {
  const slides = [food1, food2, food3];
  const [index, setIndex] = useState(0);

  const handleSlideChange = (increment) => {
    const newIndex = (index + increment + slides.length) % slides.length;
    setIndex(newIndex);
  };
  return (
    <div>
      <section className="home">
        <div className="slides-container">
          {slides.map((slide, idx) => (
            <div className={`slide ${index === idx ? "active" : ""}`} key={idx}>
              <div className="content">
                <span>fresh and organic</span>
                <h3>upto 50% off</h3>
                <Link to="#" className="btn">
                  shop now
                </Link>
              </div>
              <div className="image">
                <img src={slide} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div
          id="next-slide"
          className="next-icon"
          onClick={() => handleSlideChange(1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div
          id="prev-slide"
          className="prev-icon"
          onClick={() => handleSlideChange(-1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      </section>

      <section className="features" id="features">
        <div className="content">
          <h1 className="heading">
            our <span>features</span>
          </h1>
          <div className="box-container">
            <div className="box">
              <img src={banner1} alt="" />
              <h3>fresh and organic</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!
              </p>
              <Link to="/" className="btn">
                read more
              </Link>
            </div>
            <div className="box">
              <img src={delivery} alt="" />
              <h3>free & fast delivery</h3>
              <p>within 30 minutes</p>
              <Link to="/" className="btn">
                read more
              </Link>
            </div>
            <div className="box">
              <img src={banner1} alt="" />
              <h3>easy payment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit, quis!
              </p>
              <Link to="/" className="btn">
                read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
