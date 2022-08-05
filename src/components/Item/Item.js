import ItemCount from "../ItemCount/ItemCount";

const Item = ({ data }) => {
  const { name, price, image, stock } = data;
  return (
    <div className="item-product">
      <img src={`/assets/${image}`} alt="imagen de producto" />
      <p>{name}</p>
      <p>$ {price}</p>
      <ItemCount stock={stock} initial={1} />
      <button>Comprar</button>
    </div>
  );
};

export default Item;
