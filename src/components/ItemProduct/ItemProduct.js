import { Link } from "react-router-dom";
import "./ItemProduct.scss";

const ItemProduct = ({ data }) => {
  const { id, name, price, image, stock } = data;

  return (
    <Link to={`/productos/${id}`}>
      <div className="item__product">
        <img src={`/assets/${image}`} alt="imagen de producto" />
        <p>{title}</p>
        <p>$ {price}</p>
        {/* <ItemCount stock={stock} initial={1} /> */}
        <button>Comprar</button>
      </div>
    </Link>
  );
};

export default ItemProduct;
