import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../Context/CartContext";
import React, { useContext, useState, useEffect } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);

  const { cart } = useContext(CartContext);

  const getTotalPrice = (array) => {
    return array.reduce(
      (acum, currentValue) => acum + currentValue.price * currentValue.qty,
      0
    );
  };

  const getTotalItems = (array) => {
    return array.reduce((acum, currentValue) => acum + currentValue.qty, 0);
  };

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  return (
    <section className="cart">
      <ul className="list-header">
        <li className="list-header__item"></li>
        <li className="list-header__item">Libro</li>
        <li className="list-header__item">Cantidad</li>
        <li className="list-header__item">Precio</li>
        <li className="list-header__item">Subtotal</li>
      </ul>
      {items.length > 0 ? (
        items.map((item) => {
          return <CartItem key={item.id} product={item} />;
        })
      ) : (
        <p className="cart__msg">El carrito esta vacio</p>
      )}
      <ul className="list-header">
        <li className="list-header__item"></li>
        <li className="list-header__item">Total</li>
        <li className="list-header__item">{getTotalItems(cart)}</li>
        <li className="list-header__item"></li>
        <li className="list-header__item">${getTotalPrice(cart)}</li>
      </ul>
    </section>
  );
};

export default Cart;
