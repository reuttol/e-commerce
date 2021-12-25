import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";

import "./app.css";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    setCartCount(cartCount + 1);

    let added = false;
    cartList.forEach((cartProduct, index) => {
      if (cartProduct.product.id === product.id) {
        const newArr = [...cartList];
        newArr[index].qnty += 1;
        setCartList(newArr);
        added = true;
      }
    });

    if (!added) {
      setCartList([...cartList, { product, qnty: 1 }]);
    }
  }

  const changeCount = (cardItem, amount) => {
    if(cardItem.qnty === 1 && amount === -1){
      deleteFromCart(cardItem);
      return;
    }

    setCartCount(cartCount + amount);  
    let index = cartList.indexOf(cardItem);
    const newArr = [...cartList];
    newArr[index].qnty += amount;  
    setCartList(newArr);
  }

  const deleteFromCart = (cardItem) => {
    let index = cartList.indexOf(cardItem);
    const newArr = [...cartList];
    newArr.splice(index,1);
    setCartList(newArr);    
    setCartCount(cartCount - cardItem.qnty);  
  }

  const checkout = () => {
    setCartList([]);
    setCartCount(0);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar cartCount={cartCount} />
        <Switch>
          {/* <Route path="/" exact component={Homepage} /> */}
          <Route path="/products" exact>
            <Products cartUpdate={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart cartList={cartList} deleteProduct={deleteFromCart} addSubBtns={changeCount} pay={checkout} />
          </Route>
          {/* <Route component={NotFound404} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
