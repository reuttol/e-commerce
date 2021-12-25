import React from "react";

import "./productCard.css";

const Product = ({
  product: { name, description, price, imgURL, discount },
  handleClick,
  product,
}) => {
  return (
    <div className="product-card-container">
      <figure className="img-container">
        <img src={imgURL} alt={name} />
      </figure>
      <div className="g">
        <div>{name}</div>
        <div>{description}</div>
        <div className="price-container">
          <span>{price}$</span>
          <span className="discount">{discount}$</span>
        </div>
      </div>
      <button onClick={() => handleClick(product)}>Add To Cart</button>
    </div>
  );
};

export default Product;
