import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import AulogImg from "../../images/logo_aumarket_fundoamarelo.svg";
import carrinho from "../../images/carrinho.svg";

//Header padrao para usuario deslogado
function HeaderUm() {
  //Renderização do componente
  return (
    <div className="Header">
      <nav>
        <ul>
          <li id="logUser">
            <Link to="/Login">Nosso Login</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Cadastro">Cadastre-se</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Carrinho1">
              <img src={carrinho} alt="carrinho" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <Link to="/">
          <img src={AulogImg} alt="logo au.market" />
        </Link>
      </div>
    </div>
  );
}

export default HeaderUm;
