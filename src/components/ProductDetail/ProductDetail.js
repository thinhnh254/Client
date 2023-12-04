import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { updateCart } from "../../apis/user";
import { getCurrent } from "../../store/user/asyncActions";
import "./ProductDetail.scss";

const ProductDetail = ({ product, onClose }) => {
  const modalRef = useRef(null);
  const cleanDescription = product.description.replace(/<\/?p>/g, "");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.user);

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

  // Close the modal if clicked outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Attach click event listener on mount and remove it on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="product-details-background">
      <div className="product-details" ref={modalRef}>
        {/* Your product details content here */}
        <div className="flex flex-col items-center justify-between">
          <div className="text-6xl font-bold ">{product.title}</div>
          <div className="border-t w-full my-6"></div>
          <img
            src={product.images}
            alt={product.title}
            className="w-[400px] h-[250px] my-4 rounded-lg"
          />
        </div>
        <div className="flex items-center text-2xl justify-start my-4">
          <span className="mr-2 font-bold ">Description: </span>
          <span>{cleanDescription}</span>
        </div>

        <div className="flex items-center text-2xl justify-start my-4">
          <span className="mr-2 font-bold ">Price: </span>
          <span>{product.price} $</span>
        </div>

        <div className="flex items-center text-2xl justify-center my-4">
          <div className="btn" onClick={() => handleAddToCart(product)}>
            Add to cart
          </div>
        </div>

        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ProductDetail;
