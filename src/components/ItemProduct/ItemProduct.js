import "./ItemProduct.scss";

const ItemProduct = ({ data, action }) => {
  const { title, image, price } = data;

  return (
    <div className="item-product">
      <div className="float-options"></div>
      <img src={`/assets/${image}`} alt="Imagen producto" />
      <div className="detail-product">
        <p>{title}</p>
        <span>$ {price}</span>
      </div>
    </div>
  );
};

export default ItemProduct;
