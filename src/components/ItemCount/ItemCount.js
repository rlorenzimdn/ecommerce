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
    <>
      <button onClick={onRemove}>-</button>
      <p>{count}</p>
      <button onClick={onAdd}>+</button>
    </>
  );
};

export default ItemCount;
