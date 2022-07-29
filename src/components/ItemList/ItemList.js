import ItemProduct from "../Item/Item";

const ItemList = ({ dataProducts }) => {
  const [listProducts, setListProducts] = useState([]);

  return (
    <>
      {dataProducts.map((product) => {
        return <ItemProduct key={product.id} data={product} />;
      })}
    </>
  );
};

export default ItemList;
