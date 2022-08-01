import "./Item.scss";
// import ItemCount from "../ItemCount/ItemCount";
// import ItemCard from "@mui/material/Card";
// import ItemContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

const Item = ({ data }) => {
  // const { title, price, image, author, description, category, stock } = data;
  const { title, price, image } = data;

  return (
    <div className="item-product">
      <div className="float-options"></div>
      <img src={`/assets/${image}`} alt="Imagen producto" />
      <div className="detail-product">
        <p>{title}</p>
        <span>$ {price}</span>
        <button>Comprar</button>
      </div>
    </div>
  )
};

export default Item;
