import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import ItemCount from "../ItemCount/ItemCount";

const NavBar = () => {
  return (
    <div className="nav-primary">
      <img
        src="/assets/logo.png"
        width="90"
        height="70"
        className="d-inline-block align-top"
        alt="Logo Puntero"
      />
      <ul>
        <li>
          <button>INICIO</button>
        </li>
        <li>
          <button>LIBROS</button>
        </li>
        <li>
          <button>TEMAS</button>
        </li>
      </ul>
      <CartWidget />
      <ItemCount />
    </div>
  );
};

export default NavBar;
