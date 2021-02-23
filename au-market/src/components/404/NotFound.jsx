import React from "react";
import { Link } from "react-router-dom";
import logoCores from "../../images/logo_2cores.png";
import "./NotFound.css";
import dognotfound from "../../images/imagemdogerror-01.png";

//Rendericação de componente para caminho nao encontrado (404)
function NotFound() {
  return (
    <div className="container3">
      <div className="col-md-6">
        <div className="img-container">
          <img src={dognotfound} alt="" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="container-info">
          <h2 id="ops">OOPS!</h2>
          <p className="erro">ERRO 404</p>
          <p className="erro">PAGE NOT FOUND</p>
          <small className="volte">NÃO ENCONTRAMOS ESSE CAMINHO! </small>
          <br />
          <small className="volte">CLIQUE EM VOLTAR E TENTE NOVAMENTE</small>
          <div className="btn-container not-found">
            <Link to="/">
              <button id="voltar-found">VOLTAR</button>
            </Link>
          </div>
          <div className="logo-image">
            <img src={logoCores} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;