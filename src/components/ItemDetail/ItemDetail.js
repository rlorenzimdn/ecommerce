import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ data }) => {
  const { image, title, description, price, stock } = data;

  return (
    <div className="item-detail">
      <div>
        <img src={image} alt="imagen de producto" />
      </div>
      <div>
        <p>{title}</p>
        <p>----------------------------------------------------</p>
        <p>{description}</p>
        <p>-------------------</p>
        <p>Disponibles: {stock}</p>
        <p>-------------------</p>
        <p>Precio: $ {price}</p>
        <p>-------------------</p>
        <ItemCount stock={stock} productData={data} />
      </div>
    </div>
  );
};

export default ItemDetail;
