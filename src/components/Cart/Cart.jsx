import React from "react";
import CartProductCard from "../CartProductCard/CartProductCard";

import "./cart.css";

const Cart = ({ cartList, deleteProduct, addSubBtns, pay }) => {

    const cartTotal = () => cartList.reduce((acc, current) => acc + current.qnty * current.product.price, 0 );
    const itemsTotal = () => cartList.reduce((acc, current) => acc + current.qnty, 0 );

  return (
    <div className="cart-container">
      
        {cartList.map((item) => (
          <CartProductCard
            cartItem={item}
            key={item.product.id}
            deleteProduct={deleteProduct}
            addSubBtns={addSubBtns}
          />
        ))}
      
      <div className="subtotal">
          {`Subtotal (${itemsTotal()} items): ${cartTotal()}$`}
      </div>
      <button onClick={pay}>Pay Now</button>
    </div>
  );
};

export default Cart;
