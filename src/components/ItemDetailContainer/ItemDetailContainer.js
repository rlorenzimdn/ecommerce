import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../Products/Products";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState({});
  const [detailContainer, setDetailContainer] = useState([]);
  const { id, category } = useParams();

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productData);
    }, 2000);
  });

  useEffect(() => {
    getItem
      .then((res) => {
        setDetailContainer(res);
      })
      .catch((error) => {
        console.log("Error en ItemListContainer");
      })
      .finally(() => {
        console.log("Se termino ItemListContainer");
      });
  }, []);

  useEffect(() => {
    filterById();
  }, []);

  const filterById = () => {
    products.some((product) => {
      if (product.id == id) {
        setProductData(product);
      }
    });
  };

  return (
    <>
      <ItemDetail data={productData} />
    </>
  );
};

export default ItemDetailContainer;
