// Pagina de Temas - Faltaria incluir ordenar alfabeticamente e incluir busqueda
import React from "react";
import "./styles.scss";
import TopicsListContainer from "../components/TopicsListContainer/TopicsListContainer";

const Topics = () => {
  return (
    <div className="container">
      <div className="main-container">
        <TopicsListContainer section="Listado de Libros por Temas" />
      </div>
    </div>
  );
};

export default Topics;
