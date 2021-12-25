import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { data } from "../../productsData";

import "./products.css";

const Products = ({cartUpdate}) => {
  const [products, setProducts] = useState(data);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleClick={cartUpdate}/>
      ))}
    </div>
  );
};

export default Products;
