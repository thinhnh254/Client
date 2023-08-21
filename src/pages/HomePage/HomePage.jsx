import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import delivery from "../../assets/icon-delivery.png";
import food from "../../assets/icon-food.png";
import "./HomePage.scss";

const HomePage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>
            fresh and <span>organic</span> products for your
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            ducimus quisquam voluptas minima blanditiis aliquam quis expedita
            fugit quibusdam doloribus exercitationem similique enim, eveniet rem
            dolorem praesentium iure incidunt voluptates?
          </p>
          <Link to={"#"} className="btn">
            shop now
          </Link>
        </div>
      </section>

      <section className="features">
        <h1 className="heading">
          our <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={food} alt="food" />
            <h3>fresh & organic</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              aperiam fugit eos et dolorem eveniet beatae facilis consequatur
              non. Ea blanditiis minus vitae deleniti dolorum labore quasi
              aspernatur modi ipsam!
            </p>
            <Link to={"#"} className="btn">
              read more
            </Link>
          </div>
          <div className="box">
            <img src={delivery} alt="food" />
            <h3>free delivery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              aperiam fugit eos et dolorem eveniet beatae facilis consequatur
              non. Ea blanditiis minus vitae deleniti dolorum labore quasi
              aspernatur modi ipsam!
            </p>
            <Link to={"#"} className="btn">
              read more
            </Link>
          </div>
          <div className="box">
            <img src={food} alt="food" />
            <h3>easy payments</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              aperiam fugit eos et dolorem eveniet beatae facilis consequatur
              non. Ea blanditiis minus vitae deleniti dolorum labore quasi
              aspernatur modi ipsam!
            </p>
            <Link to={"#"} className="btn">
              read more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
