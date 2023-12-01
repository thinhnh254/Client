import React, { useEffect, useRef } from "react";
import "./ProductDetail.scss";

const ProductDetail = ({ product, onClose }) => {
  const modalRef = useRef(null);
  const cleanDescription = product.description.replace(/<\/?p>/g, "");

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
        <div>
          <h2>{product.title}</h2>
          <img src={product.images} alt={product.title} />
          <p>Description: {cleanDescription}</p>
          <p>Price: {product.price}</p>
        </div>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ProductDetail;
