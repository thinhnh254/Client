import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getProducts } from "../../apis/product";
import { updateCart } from "../../apis/user";
import { Pagination } from "../../components";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { getCurrent } from "../../store/user/asyncActions";
import "./ShopPage.scss";

const ShopPage = () => {
  const { categories } = useSelector((state) => state.app);

  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { current } = useSelector((state) => state.user);

  const fetchProducts = async (params) => {
    const product = await getProducts({
      ...params,
      limit: process.env.REACT_APP_LIMIT,
    });
    if (product.success) {
      setProducts(product);
    }
  };
  const handleViewDetail = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = async (product) => {
    if (!current)
      return Swal.fire({
        title: "Almost...",
        text: "Please login first!",
        icon: "info",
        cancelButtonText: "Not now!",
        showCancelButton: true,
        confirmButtonText: "Go Login Page",
      }).then((rs) => {
        if (rs.isConfirmed) navigate(`/login`);
      });
    const response = await updateCart({ pid: product._id });
    if (response.success) {
      toast.success("Add success");
      dispatch(getCurrent());
    } else {
      toast.error("Fail");
    }
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };
  useEffect(() => {
    const queries = Object.fromEntries([...params]);
    fetchProducts(queries);
  }, [params]);

  return (
    <div>
      <section className="category">
        <h1 className="heading">
          products <span>categories</span>
        </h1>

        <div className="box-container">
          {categories?.map((el) => (
            <Link to={"#"} className="box">
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
          {products?.products?.map((el, index) => (
            <div className="box" key={index}>
              <img src={el.images} alt="" />

              <h3 key={index}>{el.title}</h3>
              <div className="price">{el.price}$</div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <button className="btn" onClick={() => handleAddToCart(el)}>
                Add to cart
              </button>
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
        <Pagination totalCount={products?.counts} />
      </div>
    </div>
  );
};

export default ShopPage;
