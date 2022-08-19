import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Topics.scss";
import { CartContext } from "../../Context/CartContext";

const Topics = ({ data }) => {
  const { name } = useContext(CartContext);

  const { id, category, title, author } = data;

  return (
    <Link to={`/item/${id}`}>
      <h2>{name}</h2>
      <div className="item__product">
        <p>--------------------------------------------</p>
        <p>Categoria: {category}</p>
        <p>--------------------------------------------</p>
        <p>Nombre: {title}</p>
        <p>--------------------------------------------</p>
        <p>Autor: {author}</p>
        <p>--------------------------------------------</p>
        <button>Añadir al Carrito</button>
      </div>
    </Link>
  );
};

export default Topics;
