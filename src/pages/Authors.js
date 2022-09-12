import React from "react";
import "./styles.scss";
import AuthorsListContainer from "../components/AuthorsListContainer/AuthorsListContainer";

const Authors = () => {
  return (
    <div className="container">
      <div className="main-container">
        <AuthorsListContainer section="Listado de Libros por Autores" />
      </div>
    </div>
  );
};

export default Authors;
