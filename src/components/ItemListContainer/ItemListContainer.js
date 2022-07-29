import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ section }) => {
  const [listProducts, setListProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return (
    <div className="list-products">
      <h2>{section}</h2>
      <p>aca los productos</p>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
