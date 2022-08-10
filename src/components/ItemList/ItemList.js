import React from "react";
import "./ItemList.scss";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="itemlist">
      {items.map((product) => {
        return <Item key={items.id} data={product} />;
      })}
    </div>
  );
};

export default ItemList;
