import React from "react";

import "./cartProductCard.css";

const CartProductCard = ({cartItem, deleteProduct, addSubBtns}) => {
  return (
    <div className="cart-card-container">
      <div className="price-header">price</div>
      <div className="cart-card">
        <figure className="cart-card__img-container">
          <img src={cartItem.product.imgURL} alt="" />
        </figure>

        <div className="cart-card__product-info">
          <div>{cartItem.product.name}</div>
          <div className="cart-details">
            <div className="cart__details--quantity">
              <div>Quantity</div>
              <div className="cart__btns-quantity">
                <button onClick={()=>addSubBtns(cartItem,-1)}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <span>{cartItem.qnty}</span>
                <button onClick={()=>addSubBtns(cartItem,1)}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="cart-btns-delete">
              <span>delete</span>
              <button onClick={() => deleteProduct(cartItem)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="cart-card__price">{`${cartItem.product.price}$`}</div>
      </div>

    </div>
  );
};

export default CartProductCard;
