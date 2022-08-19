import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebaseConfig";

const ItemListContainer = ({ section, categoryParam }) => {
  const { category } = useParams();

  const [listProducts, setListProducts] = useState([]);

  const getProducts = async () => {
    const productCollection = category
      ? query(collection(db, "products"), where("categoryId", "==", category))
      : collection(db, "products");

    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productList;
  };

  useEffect(() => {
    getProducts()
      .then((res) => {
        setListProducts(res);
      })
      .catch((error) => {
        console.log("Falla en el sistema");
      })
      .finally(() => {});
  }, [category]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="item__list__container">
      <h2>{section}</h2>
      <ItemList items={listProducts} />
    </div>
  );
};

export default ItemListContainer;

