import { useState, useEffect } from "react";
import "./ItemProduct.scss";

const ItemProduct = ({ data, action }) => {
  const [contador, setContador] = useState(1);

  const { title, image, price, stock } = data;

  const addNumber = () => {
    setContador(contador + 1);
  };
  const removeNumber = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    console.log("Actualizacion");
  }, [contador]);

  return (
    <div className="item-product">
      <div className="float-options"></div>
      <div className="detail-product">
        <p>{title}</p>
        <span>$ {price}</span>
      </div>
    </div>
  );
};

export default ItemProduct;
