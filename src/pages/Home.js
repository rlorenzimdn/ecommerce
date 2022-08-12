import React from "react";
import "./styles.scss";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

function Home() {
  return (
    <div className="container">
      <section className="main-container">
        <ItemListContainer section="Libros Destacados" />
      </section>
    </div>
  );
}

export default Home;
