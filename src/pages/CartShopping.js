import Cart from "../components/Cart/Cart";
import { useNavigate } from 'react-router-dom';

const CartShopping = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="main-container">
        <Cart section="Carrito de Compras" />
      </div>
      <div className="main-container">
      <button
          className="button button-primary"
          onClick={() => {
            console.log('enevjrnfikwr');
            navigate('/checkout');
          }}
        >
          Continuar con la Compra
        </button>
      </div>
    </div>
  );
};

export default CartShopping;
