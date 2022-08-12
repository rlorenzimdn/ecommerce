import React from "react";
import "./styles.scss";
import TopicsListContainer from "../components/TopicsListContainer/TopicsListContainer";

function Topics() {
  return (
    <div className="container">
      <section className="main-container">
        <TopicsListContainer section="Listado de Libros" />
      </section>
    </div>
  );
}

export default Topics;
