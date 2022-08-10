import React from "react";
import { useState } from "react";
import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import Products from "../Data/Products";

function ItemListContainer({ section }) {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    resolve(Products);
  });

  getProducts
    .then((res) => {
      setListProducts(res);
    })
    .catch((error) => {})
    .finally(() => {});

  return (
    <div className="item__list__container">
      <h2>{section}</h2>
      <ItemList items={listProducts} />
    </div>
  );
}

export default ItemListContainer;
