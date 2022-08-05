import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import products from "../Products/Products";

const ItemListContainer = ({ section, categoryParam }) => {
  const { category } = useParams();
  const [listProducts, setListProducts] = useState([]);
  const filterByCategory = products.filter(
    (prod) => prod.categoryId === category
  );

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryParam === "") {
        resolve(products);
      } else {
        resolve(filterByCategory);
      }
    }, 2000);
  });

  useEffect(() => {
    getProducts
      .then((res) => {
        setListProducts(res);
      })
      .catch((error) => {
        console.log("Falla en el sistema");
      })
      .finally(() => {
        console.log("Se terminó todo");
      });
  }, [filterByCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="item__list__container">
      <h2>{section}</h2>
      <ItemList items={listProducts} />
    </div>
  );
};

export default ItemListContainer;
