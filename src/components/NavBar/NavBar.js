import React from "react";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <img
          className="navbar__logo"
          src="/assets/logo.png"
          alt="Logo Puntero"
        />
        <div className="navbar__items">
          <Link to={"/Home"} className="navbar__item">
            Inicio
          </Link>
          <Link to={"/Books"} className="navbar__item">
            Libros
          </Link>
          <Link to={"/Topics"} className="navbar__item">
            Temas
          </Link>
          <Link to={"/Authors"} className="navbar__item">
            Autores
          </Link>
          <Link to={"/Contact"} className="navbar__item">
            Contacto
          </Link>
        </div>
        <div className="navbar__cart">
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
