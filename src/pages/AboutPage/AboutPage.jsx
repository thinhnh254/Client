import { faEye, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/banhbachtuoc.jpeg";
import gallery from "../../assets/dua-heligan.jpg";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div>
      <div className="heading">
        <h1>about us</h1>
      </div>

      <section className="about">
        <div className="image">
          <img src={about} alt="" />
        </div>

        <div className="content">
          <span>welcome to our shop</span>
          <h3>fresh & organic food</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            harum perspiciatis fugit soluta consequuntur facilis facere nulla
            dolores reiciendis et unde explicabo quaerat voluptas id, ab
            voluptate architecto? Corporis, deserunt.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            saepe voluptatem nulla iste delectus, ab nobis aliquid consequatur
            magni adipisci provident necessitatibus harum minima voluptatibus
            deserunt vel quia quis perspiciatis.
          </p>
          <Link to={"#"} className="btn">
            read more
          </Link>
        </div>
      </section>

      <section className="gallery">
        <h1 className="title">
          out <span>gallery</span>
          <Link className="link" to={"#"}>
            view all
          </Link>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>

          <div className="box">
            <img src={gallery} alt="" />
            <div className="icons">
              <FontAwesomeIcon className="icon-item" icon={faHeart} />
              <FontAwesomeIcon className="icon-item" icon={faEye} />
              <FontAwesomeIcon className="icon-item" icon={faShare} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
