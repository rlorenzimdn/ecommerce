import "./AuthorsList.scss";
import Authors from "../Authors/Authors";
import React from "react";

const AuthorsList = ({ items }) => {
  return (
    <div className="itemlist">
      {items.map((product) => {
        return <Authors key={items.id} data={product} />;
      })}
    </div>
  );
};

export default AuthorsList;
