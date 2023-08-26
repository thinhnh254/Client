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
import "./HomePage.scss";

const HomePage = () => {
  const slides = [food1, food2, food3];
  const [index, setIndex] = useState(0);

  const handleSlideChange = (increment) => {
    const newIndex = (index + increment + slides.length) % slides.length;
    setIndex(newIndex);
  };
  return (
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
  );
};
export default HomePage;
