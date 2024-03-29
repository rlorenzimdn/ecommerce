import "./AuthorsListContainer.scss";
import AuthorsList from "../AuthorsList/AuthorsList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import db from "../Firebase/firebaseConfig";

const AuthorsListContainer = ({ section }) => {
  const { category } = useParams();

  const [listProducts, setListProducts] = useState([]);

  const getProducts = async () => {
    const productCollection = category
      ? query(collection(db, "products"), orderBy("author"), limit(10))
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
      <AuthorsList items={listProducts} />
    </div>
  );
};

export default AuthorsListContainer;
