import React from "react";
import user from "../../assets/dua-heligan.jpg";
import delivery from "../../assets/icon-delivery.png";
import food from "../../assets/icon-food.png";
import restaurant from "../../assets/icon-restaurant.png";
import "./ReviewPage.scss";

const ReviewPage = () => {
  return (
    <div>
      <div className="heading">
        <h1>client's review</h1>
      </div>

      <section className="info-container">
        <div className="info">
          <img src={delivery} alt="" />
          <div className="content">
            <h3>fast delivery</h3>
            <span>within 30 minutes</span>
          </div>
        </div>

        <div className="info">
          <img src={food} alt="" />
          <div className="content">
            <h3>fast delivery</h3>
            <span>within 30 minutes</span>
          </div>
        </div>

        <div className="info">
          <img src={restaurant} alt="" />
          <div className="content">
            <h3>fast delivery</h3>
            <span>within 30 minutes</span>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div className="info">
              <h3>Thinh</h3>
              <span>happy client</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
            nobis id fugit sequi, illum minima non placeat eveniet explicabo
            esse voluptatum?
          </p>
        </div>

        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div className="info">
              <h3>Thinh</h3>
              <span>happy client</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
            nobis id fugit sequi, illum minima non placeat eveniet explicabo
            esse voluptatum?
          </p>
        </div>

        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div className="info">
              <h3>Thinh</h3>
              <span>happy client</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
            nobis id fugit sequi, illum minima non placeat eveniet explicabo
            esse voluptatum?
          </p>
        </div>

        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div className="info">
              <h3>Thinh</h3>
              <span>happy client</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
            nobis id fugit sequi, illum minima non placeat eveniet explicabo
            esse voluptatum?
          </p>
        </div>

        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div className="info">
              <h3>Thinh</h3>
              <span>happy client</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
            nobis id fugit sequi, illum minima non placeat eveniet explicabo
            esse voluptatum?
          </p>
        </div>

        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div className="info">
              <h3>Thinh</h3>
              <span>happy client</span>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            totam rem magnam voluptates deleniti nostrum quaerat commodi saepe
            nobis id fugit sequi, illum minima non placeat eveniet explicabo
            esse voluptatum?
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReviewPage;
