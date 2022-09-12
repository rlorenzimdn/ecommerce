import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { name } = useContext(CartContext);
  const { id, title, description, price, image, stock } = data;
  const cartContex = useContext(CartContext);
  const { addToCart } = cartContex;

  return (
    <Link to={`/item/${id}`}>
    <div className="item__detail">
      <h2>{name}</h2>
      <div>
        <img src={image} alt="imagen de producto" />
      </div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>Disponibles: {stock}</p>
        <p>Precio: $ {price}</p>
        <ItemCount stock={stock} initial={1} />
        <button
          className="btn__detail"
          onClick={() => {
            addToCart(data, 1);
          }}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
    </Link>
  );
};

export default ItemDetail;
