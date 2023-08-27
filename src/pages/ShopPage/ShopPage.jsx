import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/icon-food.png";
import "./ShopPage.scss";

const ShopPage = () => {
  return (
    <div>
      <div className="heading">
        <h1>our shop</h1>
      </div>

      <section className="category">
        <h1 className="title">
          our <span>category</span>
          <Link className="link" to={"#"}>
            view all
          </Link>
        </h1>

        <div className="box-container">
          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>fresh fruits</h3>
          </Link>

          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>fresh fruits</h3>
          </Link>

          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>fresh fruits</h3>
          </Link>

          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>fresh fruits</h3>
          </Link>

          <Link to={"#"} className="box">
            <img src={banner1} alt="" />
            <h3>fresh fruits</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
