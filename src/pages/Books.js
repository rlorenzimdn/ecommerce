// Pagina de Libros - Faltaria incluir ordenar alfabeticamente e incluir busqueda
import React from "react";
import "./styles.scss";
import BooksListContainer from "../components/BooksListContainer/BooksListContainer";

const Books = () => {
  return (
    <div className="container">
      <div className="main-container">
        <BooksListContainer section="Listado de Libros por Nombres" />
      </div>
    </div>
  );
};

export default Books;
