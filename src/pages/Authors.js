// Pagina de Autores - Faltaria incluir ordenar alfabeticamente e incluir busqueda
import React from "react";
import "./styles.scss";
import AuthorsListContainer from "../components/AuthorsListContainer/AuthorsListContainer";

const Authors = () => {
  return (
    <div className="container">
      <section className="main-container">
        <AuthorsListContainer section="Listado de Libros" />
      </section>
    </div>
  );
};

export default Authors;
