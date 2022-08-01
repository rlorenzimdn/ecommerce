import "./ItemCount.scss";
import React, { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onRemove = () => {
    setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={onRemove}>-</button>
      <p>{count}</p>
      <button onClick={onAdd}>+</button>
    </div>
  );
};

export default ItemCount;
