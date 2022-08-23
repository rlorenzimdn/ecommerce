import "./TopicsList.scss";
import Topics from "../Topics/Topics";
import React from "react";

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
