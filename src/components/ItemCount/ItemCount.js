import { Button } from "@mui/material";

const ItemCount = ({ cantidad, setCantidad, setShowButton }) => {
  const addProduct = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Button>-</Button>
        <p>{cantidad}</p>
        <Button onClick={addProduct}>+</Button>
      </div>
    </>
  );
};

export default ItemCount;
