import React from "react";
import "./NavBar.css";
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
          <Link className="navbar__item" to={"/home"}>
            Inicio
          </Link>
          <Link className="navbar__item" to={"/books"}>
            Libros
          </Link>
          <Link className="navbar__item" to={"/topics"}>
            Temas
          </Link>
          <Link className="navbar__item" to={"/authors"}>
            Autores
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
