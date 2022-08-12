import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Item.scss";
import { CartContext } from "../../context/CartContext";

function Item({ data }) {
  const { name } = useContext(CartContext);
  const { id, title, price, image } = data;

  return (
    <Link to={`/item/${id}`}>
      <h2>{name}</h2>
      <div className="item__product">
        <img src={image} className="item__product__img" alt="Imagen Libro" />
        <p>{title}</p>
        <p>${price}</p>
        <button>Añadir al Carrito</button>
      </div>
    </Link>
  );
}

export default Item;
