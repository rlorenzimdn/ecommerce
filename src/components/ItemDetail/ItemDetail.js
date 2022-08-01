import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const { title, price, image, author, description, category, stock } = data;

  return (
    <div className="item-detail">
      <div>
        <img src={`/assets/${image}`} alt="imagen de producto" />
      </div>
      <div>
        <p>{title}</p>
        <p>{hand}</p>
        <p>{description}</p>
        <ItemCount stock={stock} initial={1} />
        <p>$ {price}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
