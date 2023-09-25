import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import user from "../../assets/dua-heligan.jpg";
import "./ReviewPage.scss";

const ReviewPage = () => {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        customers <span>review</span>
      </h1>

      <div className="reviews-container">
        <div className="box">
          <img src={user} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>

        <div className="box">
          <img src={user} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>

        <div className="box">
          <img src={user} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>

        <div className="box">
          <img src={user} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>

        <div className="box">
          <img src={user} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            maxime inventore illo nemo cupiditate quam eligendi nihil sunt
            ullam, laudantium, earum in nam provident quaerat exercitationem?
          </p>
          <h3>john deo</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
