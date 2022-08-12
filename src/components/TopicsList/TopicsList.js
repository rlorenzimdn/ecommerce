import React from "react";
import "./TopicsList.scss";
import Topics from "../Topics/Topics";

const TopicsList = ({ items }) => {
  return (
    <div className="itemlist">
      {items.map((product) => {
        return <Topics key={items.id} data={product} />;
      })}
    </div>
  );
};

export default TopicsList;
