/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../Data/products.mock";

function ItemDetailContainer({ items }) {

  const [getProductData, setProductData] = useState({});

  const { itemid } = useParams();

  const getProduct = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(Products);
    });
  });

  useEffect(() => {
    getProduct.then((Products) =>
      // eslint-disable-next-line array-callback-return
      Products.some((item) => {
        if (item.id === itemid) {
          setProductData(item);
        }
      })
    );
  }, [itemid]);

  return (
    <div className="item__detail__container">
      <ItemDetail item={getProductData} />
    </div>
  );
}

export default ItemDetailContainer;
