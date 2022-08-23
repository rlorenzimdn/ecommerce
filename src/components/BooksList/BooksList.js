import "./BooksList.scss";
import Books from "../Books/Books";
import React from "react";

const BooksList = ({ items }) => {
  return (
    <div className="itemlist">
      {items.map((product) => {
        return <Books key={items.id} data={product} />;
      })}
    </div>
  );
};

export default BooksList;
