import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Books.scss";
import { CartContext } from "../../context/CartContext";

function Books({ data }) {
  const { name } = useContext(CartContext);
  const { id, title, author, price, description, editor, stock } = data;

  return (
    <Link to={`/books/${id}`}>
      <h2>{name}</h2>
      <div className="item__product">
        <p>--------------------------------------------</p>
        <p>Nombre:   {title}</p>
        <p>--------------------------------------------</p>
        <p>Autor:   {author}</p>
        <p>--------------------------------------------</p>
        <p>Descripcion:   {description}</p>
        <p>--------------------------------------------</p>
        <p>Editorial:   {editor}</p>
        <p>--------------------------------------------</p>
        <p>Precio:   $ {price}</p>
        <p>--------------------------------------------</p>
        <p>Disponibles:   {stock}</p>
        <p>--------------------------------------------</p>
        <button>Añadir al Carrito</button>
      </div>
    </Link>
  );
}

export default Books;
