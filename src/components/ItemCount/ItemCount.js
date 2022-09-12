import "./ItemCount.scss";
import { CartContext } from "../CartContext/CartContext";
import { useState, useContext } from "react";

const ItemCount = ({ stock, setStock }) => {
  const { addProductToCart } = useContext(CartContext);

  const [count, setCount] = useState(1);

  const addItem = () => {
    if (stock > count) {
      setCount(count + 1);
    }
  };

  const removeItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item__count">
      <button onClick={removeItem}>-</button>
      <p>{count}</p>
      <button onClick={addItem}>+</button>
    </div>
  );
};

export default ItemCount;
