import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Authors.scss";
import { CartContext } from "../../context/CartContext";

function Authors({ data }) {
  const { name } = useContext(CartContext);
  const { id, title, author } = data;

  return (
    <Link to={`/books/${id}`}>
      <h2>{name}</h2>
      <div className="item__product">
      <p>--------------------------------------------</p>
        <p>Autor:   {author}</p>
        <p>--------------------------------------------</p>
        <p>Nombre:   {title}</p>
        <p>--------------------------------------------</p>
        <button>Añadir al Carrito</button>
      </div>
    </Link>
  );
}

export default Authors;
