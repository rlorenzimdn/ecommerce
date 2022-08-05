import Item from "../Item/Item";

const ItemList = ({ dataProducts }) => {
  return (
    <>
      {dataProducts.map((products) => {
        return (
          <>
            <Item key={products.id} data={dataProducts} />
          </>
        );
      })}
    </>
  );
};

export default ItemList;
