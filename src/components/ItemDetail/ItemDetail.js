import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const { image, title, description, price, hand, stock } = data;

  return (
    <div className="item-detail">
      <div>
        <img src={image} alt="imagen de producto" />
      </div>
      <div>
        <p>{title}</p>
        <p>{hand}</p>
        <p>{description}</p>
        <p>Unidades disponibles {stock}</p>
        <p>$ {price}</p>
        <ItemCount stock={stock} productData={data} />
      </div>
    </div>
  );
};

export default ItemDetail;
