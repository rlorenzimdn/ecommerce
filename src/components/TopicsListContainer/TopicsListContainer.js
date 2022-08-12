import React from "react";
import { useState } from "react";
import "./TopicsListContainer.scss";
import TopicsList from "../TopicsList/TopicsList";
import Products from "../Data/products.mock";

function TopicsListContainer({ section }) {
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
      <TopicsList items={listProducts} />
    </div>
  );
}

export default TopicsListContainer;
