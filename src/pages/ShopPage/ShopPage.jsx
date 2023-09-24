import {
  faCartPlus,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
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
  console.log(categories);

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

        <div className="box-container" style={{ display: "flex" }}>
          {categories?.map((el, index) => (
            <Link to={"#"} className="box">
              <img src={banner1} alt="" />
              <h3 key={index} style={{ marginRight: "10px" }}>
                {el.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="products">
        <h1 className="title">
          our <span>products</span>
          <Link className="link" to={"#"}>
            view all
          </Link>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>organic food</h3>
              <div className="price">$18.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>organic food</h3>
              <div className="price">$18.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>organic food</h3>
              <div className="price">$18.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>organic food</h3>
              <div className="price">$18.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>

          <div className="box">
            <div className="icons">
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link className="icons-item" to={"#"}>
                <FontAwesomeIcon icon={faEye} />
              </Link>
            </div>

            <div className="image">
              <img src={product} alt="" />
            </div>

            <div className="content">
              <h3>organic food</h3>
              <div className="price">$18.99</div>
              <div className="stars">
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
                <FontAwesomeIcon className="star-icon" icon={faStar} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
