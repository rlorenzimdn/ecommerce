import React from "react";
import { useState } from "react";
import "./BooksListContainer.scss";
import BooksList from "../BooksList/BooksList";
import Products from "../Data/products.mock";

function BooksListContainer({ section }) {
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
      <BooksList items={listProducts} />
    </div>
  );
}

export default BooksListContainer;
