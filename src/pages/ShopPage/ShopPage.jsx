import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../apis/product";
import banner1 from "../../assets/icon-food.png";
import "./ShopPage.scss";

const ShopPage = () => {
  const { categories } = useSelector((state) => state.app);
  // console.log(categories);

  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    const product = await getProducts();
    if (product.success) {
      setProducts(product.products);
    }
    const [bestSeller, newProducts] = await Promise.all([
      getProducts({ sort: "-sold" }),
      getProducts({ sort: "-createdAt" }),
    ]);
    console.log({ bestSeller, newProducts });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <section className="category">
        <h1 className="heading">
          products <span>categories</span>
        </h1>

        <div className="box-container">
          {categories?.map((el) => (
            <Link to={"#"} className="box">
              <img src={banner1} alt="" />
              <h3>{el.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="products" id="products">
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="box-container">
          {products?.map((el, index) => (
            <div className="box" key={index}>
              <img src={el.images} alt="" />

              {/* <img src={product} alt="" /> */}
              <h3 key={index}>{el.title}</h3>
              <div className="price">{el.price}</div>
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
