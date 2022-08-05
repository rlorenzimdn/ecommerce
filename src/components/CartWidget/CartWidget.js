import "./CartWidget.css";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="cart__widget">
      {" "}
      <BsCart4 className="cart__icon" />
    </div>
  );
};

export default CartWidget;
