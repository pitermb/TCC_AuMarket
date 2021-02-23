import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LogoSFundo from "../../images/logo_aumarket_coresinvertidas-01.svg";

function Footer() {
  //Renderização do componente(footer)
  return (
    <footer className="footer">
      <div className="footer-left">
        <Link to="/">
          <img src={LogoSFundo} alt="logo" />
        </Link>
      </div>
      <ul className="footer-right">
        <div className="sac">
          <p className="p-fo">Atendimento ao Consumidor</p>
          <p className="p-fo">
            <Link to="/QuemSomos">
              <i className="fa fa-envelope"></i>{" "}
            </Link>
            SAC 0800 527 765
          </p>
          <p className="p-fo">sac@sac.com.br</p>
        </div>
        <div className="socials">
          <p className="p-fo">Rede Social</p>
          <Link to="/QuemSomos">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link to="/QuemSomos">
            <i className="fa fa-github" aria-hidden="true"></i>
          </Link>
          <Link to="/QuemSomos">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </Link>
          <Link to="/QuemSomos">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="privation">
          <p className="p-fo">Política de Privacidade</p>
        </div>
      </ul>
      <div className="footer-bottom">
        <p className="p-fo">
          &copy; Copyright 2020 - Todos os direitos reservados a Equipe Entra21
        </p>
      </div>
    </footer>
  );
}

export default Footer;
