import React from "react";
import "./Home.css";
import Pesquisa from "./Pesquisa";
import banner from "../../images/banner_home-01.png";
import BtnRacao from "../../images/button_racao-01-01.svg";
import BtnHigiene from "../../images/button_higienelimpeza-01-01.svg";
import BtnCaminhas from "../../images/button_caminhas-01-01.svg";
import BtnBrinquedos from "../../images/button_adote.svg";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

//Função para renderizar componente e passar informacoes para as categorias
function MainHome(props) {
  const [state, setState] = React.useState({ redirect: false });
  const chamaCategoria = function (event) {
    props.mandaCategoria(event.target.value);
    setState({ redirect: true });
  };

  //verificação para o redirect
  if (state.redirect) {
    return <Redirect push to="/FiltroCategoria" />;
  }

  //Renderização do componente
  return (
    <main>
      <Pesquisa pesquisado={props.pesquisado}/>
      <div className="banner">
        <img src={banner} alt="banner01" />
        <h3>Bem-vindos a nossa loja virtual!</h3>
        <p>
          Aqui você encontra as melhores promoções e preços para o seu pet no
          conforto de sua casa!
        </p>
      </div>
      <div className="produtos">
        <h2>Produtos mais buscados... </h2>
        <div className="hr"></div>
      </div>
      <div className="opcoes">
        <div className="linha">
          <div className="unidade">
            <img src={BtnRacao} alt="RAÇÕES" />
            <Link to="/FiltroCategoria">
              <button type="button" onClick={chamaCategoria} value="Racao">
                RAÇÕES
              </button>
            </Link>
          </div>
          <div className="unidade">
            <img src={BtnHigiene} alt="HIGIÊNE E LIMPEZA" />
            <Link to="/FiltroCategoria">
              <button
                type="button"
                onClick={chamaCategoria}
                value="HigieneLimpeza"
              >
                HIGIÊNE E LIMPEZA
              </button>
            </Link>
          </div>
          <div className="unidade">
            <img src={BtnCaminhas} alt="CAMINHAS" />
            <Link to="/FiltroCategoria">
              <button type="button" onClick={chamaCategoria} value="Caminhas">
                CAMINHAS
              </button>
            </Link>
          </div>
          <div className="unidade">
            <img src={BtnBrinquedos} alt="BRINQUEDOS" />
            <Link to="/FiltroCategoria">
              <button type="button" onClick={chamaCategoria} value="Outros">
                BRINQUEDOS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainHome;