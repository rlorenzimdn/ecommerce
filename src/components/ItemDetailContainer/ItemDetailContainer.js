/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../Data/Products";

function ItemDetailContainer({ section }) {
  const [productData, setProductData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    filterById();
  }, [id]);

  const filterById = () => {
    Products.forEach((product) => {
      if (product.id === id) {
        setProductData(product);
      }
    });
  };

  return (
    <div className="item__detail__container">
      <ItemDetail
        id={productData.id}
        title={productData.title}
        price={productData.price}
        image={productData.img}
        description={productData.description}
        stock={productData.stock}
      />
    </div>
  );
}

export default ItemDetailContainer;
