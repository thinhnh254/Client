import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../apis/product";
import banner1 from "../../assets/icon-food.png";
import { Pagination } from "../../components";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import "./ShopPage.scss";

const ShopPage = () => {
  const { categories } = useSelector((state) => state.app);

  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const fetchProducts = async () => {
    const product = await getProducts();
    console.log(product);
    if (product.success) {
      setProducts(product.products);
    }
    const [bestSeller, newProducts] = await Promise.all([
      getProducts({ sort: "-sold" }),
      getProducts({ sort: "-createdAt" }),
    ]);
    // console.log({ bestSeller, newProducts });
  };
  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
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

              <h3 key={index}>{el.title}</h3>
              <div className="price">{el.price}</div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              {/* <Link to={`/details/${el._id}`} className="btn">
                add to cart
              </Link> */}
              <button className="btn" onClick={() => handleViewDetail(el)}>
                View details
              </button>
            </div>
          ))}
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onClose={handleCloseDetail}
            />
          )}
        </div>
      </section>

      <div className="w-4/6 text-xl m-auto my-4 flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default ShopPage;
