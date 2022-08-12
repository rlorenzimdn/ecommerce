import React from "react";
import "./styles.scss";
import BooksListContainer from "../components/BooksListContainer/BooksListContainer";

function Books() {
  return (
    <div className="container">
      <section className="main-container">
        <BooksListContainer section="Listado de Libros" />
      </section>
    </div>
  );
}

export default Books;
