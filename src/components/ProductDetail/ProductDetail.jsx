import React from "react";
import "./ProductDetail.scss"

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="blur">
      <div className="product-details">
        <div>
          <h2>{product.title}</h2>
          <img src={product.images} alt={product.title} />
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          {/* Add other product details here */}
        </div>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ProductDetail;
