import { useEffect, useState } from "react";
import "./ItemListContainer.scss";

const ItemListContainer = ({ section }) => {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
  return (
    <div className="list-products">
      <h2>{section}</h2>
      <ItemList dataProducts={listProducts} />
    </div>
  );
};

export default ItemListContainer;
