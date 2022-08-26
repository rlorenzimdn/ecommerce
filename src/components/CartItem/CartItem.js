import "./CartItem.scss";
import { CartContext } from "../Context/CartContext";
import React, { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

const CartItem = ({ product }) => {
  const cartContex = useContext(CartContext);
  const { removeItemById } = cartContex;

  return (
    <div className="cart-item">
      <div
        className="cart-item__item"
        onClick={() => {
          removeItemById(product.id);
        }}
      >
        <MdRemoveShoppingCart />
      </div>
      <h4 className="cart-item__item">{product.title}</h4>
      <span className="cart-item__item">{product.qty}</span>
      <span className="cart-item__item">${product.price}</span>
      <span className="cart-item__item">${product.qty * product.price}</span>
    </div>
  );
};

export default CartItem;
