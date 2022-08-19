import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct().then((res) => {
      setProductData(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    console.log("docsnapshot", docSnapshot);

    let product = docSnapshot.data();
    product.id = docSnapshot.id;
    console.log("data con id", product);
    return product;
  };

  return (
    <div className="item__detail__container">
      <ItemDetail data={productData} />
    </div>
  );
};

export default ItemDetailContainer;
