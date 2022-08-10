import React, { useState } from "react";
import "./ItemCount.scss";

function ItemCount({ stock, setStock }) {
  const [count, setCount] = useState(1);

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    setCount(count - 1);
  };

  return (
    <div className="item__count">
      <button onClick={removeItem}>-</button>
      <p>{count}</p>
      <button onClick={addItem}>+</button>
    </div>
  );
}

export default ItemCount;
