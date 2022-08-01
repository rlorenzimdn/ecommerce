import Item from "../Item/Item";

const ItemList = ({dataProducts}) => {
  return(
      <>
          {dataProducts.map( (Products) => {    
              return <Item key={Products.id} data={Products}/>
          })}
      </>
  )
};

export default ItemList;
