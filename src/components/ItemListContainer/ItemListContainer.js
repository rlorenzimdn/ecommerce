import "./ItemListContainer.scss";
import Products from "../Products/Products";
import ItemList from "../ItemList/ItemList";
import { useState } from "react";

const ItemListContainer = ({ section }) => {
  const [dataProducts, setDataProducts] = useState([]);

  const getDataProducts = () => {
    return new Promise((resolve, reject) => {
      return resolve(Products);
    });
  };

  useEffect(() => {
    getDataProducts()
      .then((Products) => {
        setDataProducts(Products);
      })
      .finally(() => {
        console.log("FIN");
      });
  }, []);

  return (
    <div className="list-products">
      <h2>{section}</h2>
      <ItemList items={dataProducts} />
    </div>
  );
};

export default ItemListContainer;
