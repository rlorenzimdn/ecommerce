import React from "react";
import { useState } from "react";
import "./AuthorsListContainer.scss";
import AuthorsList from "../AuthorsList/AuthorsList";
import Products from "../Data/products.mock";

function AuthorsListContainer({ section }) {
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
      <AuthorsList items={listProducts} />
    </div>
  );
}

export default AuthorsListContainer;
