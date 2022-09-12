import "./Authors.scss";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Authors = ({ data }) => {
  const { name } = useContext(CartContext);
  const { id, title, author } = data;

  return (
    <Link to={`/item/${id}`}>
      <h2>{name}</h2>
      <div className="item__product">
        <p>--------------------------------------------</p>
        <p>Autor: {author}</p>
        <p>--------------------------------------------</p>
        <p>Nombre: {title}</p>
        <p>--------------------------------------------</p>
        <button>Ver Detalles</button>
      </div>
    </Link>
  );
};

export default Authors;
