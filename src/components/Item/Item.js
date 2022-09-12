import "./Item.scss";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { id, title, price, image } = data;

  return (
    <Link to={`/item/${id}`}>
      <div className="item__product">
        <img src={image} className="item__product__img" alt="Imagen Libro" />
        <p>{title}</p>
        <p>---------</p>
        <p>$ {price}</p>
        <p>---------</p>
      </div>
    </Link>
  );
};

export default Item;
