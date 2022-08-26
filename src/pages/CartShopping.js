import Cart from "../components/Cart/Cart";
import { useNavigate } from 'react-router-dom';

const CartShopping = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <section className="main-container">
        <Cart section="Carrito de Compras" />
      </section>
      <section className="main-container">
      <button
          className="button button-primary"
          onClick={() => {
            console.log('enevjrnfikwr');
            navigate('/checkout');
          }}
        >
          Continuar con la Compra
        </button>
      </section>
    </div>
  );
};

export default CartShopping;
