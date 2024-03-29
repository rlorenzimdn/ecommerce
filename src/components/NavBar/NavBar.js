import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div>
          <img
            className="navbar__logo"
            src="/assets/logo.png"
            alt="Logo Puntero"
          />
        </div>
        <div className="navbar__items">
          <Link to={"/"} className="navbar__item">
            Inicio
          </Link>
          <Link to={"/books"} className="navbar__item">
            Libros
          </Link>
          <Link to={"/topics"} className="navbar__item">
            Temas
          </Link>
          <Link to={"/authors"} className="navbar__item">
            Autores
          </Link>
          <Link to={"/contact"} className="navbar__item">
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
};

export default NavBar;
