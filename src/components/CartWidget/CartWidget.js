import "./CartWidget.scss";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartWidget = () => {
  const cartContex = useContext(CartContext);
  const { cart } = cartContex;

  const getTotalItems = (array) => {
    return array.reduce((acum, currentValue) => acum + currentValue.qty, 0);
  };

  return (
    <div className="cartwidget-container">
      <BsCart4 className="cartwidget-container__bread-icon" />
      <span className="cartwidget-container__qty"> {getTotalItems(cart)} </span>
    </div>
  );
};

export default CartWidget;
