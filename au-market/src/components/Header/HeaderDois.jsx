import React from "react";
import "./HeaderDois.css";
import AulogImg from "../../images/logo_aumarket_fundoamarelo.svg";
import carrinho from "../../images/carrinho.svg";
import { Link } from "react-router-dom";

//Header para usuario logado
function HeaderDois(props) {
  //recarrega caso usuario queira sair
  const Logout = function () {
    window.location.reload();
  };

  //Renderização do componente
  return (
    <div className="Header">
      <nav>
        <ul className="ulClass">
          {/* Nome do usuario */}
          <li id="logUser">Olá, {props.user}</li>
          <li>|</li>
          <li onClick={Logout}>Logout</li>
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

export default HeaderDois;
