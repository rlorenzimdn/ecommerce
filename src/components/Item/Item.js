import "./Item.scss";
import Item from "@mui/material/Card";
import ItemContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

const Item = ({ image, title, price }) => {
  return (
    <Item sx={{ minWidth: 275 }}>
      <ItemContent>
        <div className="card-item">
          <div>
            <img src={`./${image}`} />
          </div>
          <p>{title}</p>
          <span>$ {price}</span>
          <Button variant={"contained"}>Detalle</Button>
        </div>
      </ItemContent>
    </Item>
  );
};

export default Item;
