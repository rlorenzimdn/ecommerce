import React from "react";
import "./styles.scss";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div className="container">
      <div className="main-container">
        <ItemListContainer section="Libros Destacados" />
      </div>
    </div>
  );
};

export default Home;
