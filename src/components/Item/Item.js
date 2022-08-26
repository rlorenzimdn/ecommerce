import "./Item.scss";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { name } = useContext(CartContext);
  const { id, title, price, image, stock } = data;
  const cartContex = useContext(CartContext);
  const { addToCart } = cartContex;

  return (
    <Link to={`/item/${id}`}>
      <h2>{name}</h2>
      <div className="item__product">
        <img src={image} className="item__product__img" alt="Imagen Libro" />
        <p>{title}</p>
        <p>---------</p>
        <p>$ {price}</p>
        <p>---------</p>
        <ItemCount stock={stock} initial={1} />
        <button
          className="button button-primary"
          onClick={() => {
            addToCart(data, 1);
          }}
        >
          Añadir al carrito
        </button>
      </div>
    </Link>
  );
};

export default Item;
