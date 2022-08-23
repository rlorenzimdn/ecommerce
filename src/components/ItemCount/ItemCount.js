import "./ItemCount.scss";
import { CartContext } from "../../Context/CartContext";
import { useState, useContext } from "react";

const ItemCount = ({ stock, setStock }) => {
  const { addProductToCart } = useContext(CartContext);

  const [count, setCount] = useState(1);

  const onAdd = () => {
    addProductToCart(setStock);
    setCount(count + 1);
  };

  const removeItem = () => {
    setCount(count - 1);
  };

  return (
    <div className="item__count">
      <button onClick={removeItem}>-</button>
      <p>{count}</p>
      <button onClick={onAdd}>+</button>
    </div>
  );
};

export default ItemCount;
