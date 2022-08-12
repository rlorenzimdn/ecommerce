import React from "react";
import "./AuthorsList.scss";
import Authors from "../Authors/Authors";

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
