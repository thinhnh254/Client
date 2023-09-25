import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/app";
import product from "../../assets/3miengca.png";
import banner1 from "../../assets/icon-food.png";
import "./ShopPage.scss";

const ShopPage = () => {
  const [categories, setCategories] = useState(null);
  const fetchCategories = async () => {
    const response = await getCategories();
    if (response.success) {
      setCategories(response.getAllCategoryStatus);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  // console.log(categories);

  return (
    <div>
      <section className="category">
        <h1 className="heading">
          products <span>categories</span>
        </h1>

        <div className="box-container">
          {categories?.map((el, index) => (
            <Link to={"#"} className="box">
              <img src={banner1} alt="" />
              <h3 key={index}>{el.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={product} alt="" />
            <h3>fresh orange</h3>
            <div className="price">$4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>

          <div className="box">
            <img src={product} alt="" />
            <h3>fresh orange</h3>
            <div className="price">$4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>

          <div className="box">
            <img src={product} alt="" />
            <h3>fresh orange</h3>
            <div className="price">$4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>

          <div className="box">
            <img src={product} alt="" />
            <h3>fresh orange</h3>
            <div className="price">$4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>

          <div className="box">
            <img src={product} alt="" />
            <h3>fresh orange</h3>
            <div className="price">$4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
