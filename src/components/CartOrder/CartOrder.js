import "./CartOrder.scss";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { createItem, deleteItem } from "../Firebase/Firestore";

const CartOrder = () => {
  const navigate = useNavigate();

  const { cart, deleteCart } = useContext(CartContext);

  const [success, setSuccess] = useState(false);

  const [orderNumber, setOrderNumber] = useState(null);

  const useForm = ( initialState = {} ) => {

    const [ values, setValues ] = useState( initialState );

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };    


    return [values, handleInputChange ];
};

  const [formValues, handleInputChange] = useForm({
    email: "",
    name: "",
    phone: "",
  });

  const { email, name, phone } = formValues;

  const getTotalPrice = (array) => {
    return array.reduce(
      (acum, currentValue) => acum + currentValue.price * currentValue.qty,
      0
    );
  };

  const dataOrder = {
    buyer: formValues,
    items: cart,
    totalPrice: getTotalPrice(cart),
    date: new Date().toISOString(),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccess(true);
      const response = await createItem(dataOrder, "orders");
      deleteCart();
      setOrderNumber(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelOrder = async () => {
    try {
      const response = await deleteItem(orderNumber, "orders");
      console.warn(response);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {success ? (
        <>
          {orderNumber ? (
            <div>
              <p>Número de Orden{orderNumber}</p>
              <button className="button button-primary" onClick={cancelOrder}>
                Cancelar orden
              </button>
            </div>
          ) : (
            <p>procesando compra</p>
          )}
        </>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <h2>Datos del Comprador</h2>
          <div className="form__group">
            <label htmlFor="">Nombre:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="">Teléfono:</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="button button-primary">
            Comprar
          </button>
        </form>
      )}
    </>
  );
};

export default CartOrder;
