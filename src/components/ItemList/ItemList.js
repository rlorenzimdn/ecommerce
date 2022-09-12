import "./ItemList.scss";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((product) => {
        return <Item key={product.id} data={product} />;
      })}
    </div>
  );
};

export default ItemList;
