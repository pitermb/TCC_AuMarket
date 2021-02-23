import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import search from "../../images/search.svg";
import {Redirect} from 'react-router';

//Renderização do componente (menu superior)
function Pesquisa(props) {
  const [state, setState] = React.useState({ redirect: false });

  function pesquisaProd() {
    //pegando valor digitado
    var texto = document.getElementById("idInputPesquisa").value;
    var textoMin = texto.toLowerCase()

    props.pesquisado(textoMin);
    setState({ redirect: true });
  }
  if (state.redirect) {
    return <Redirect push to="/FiltroPesquisa" />;
  }
  return (
    //Renderização do componente
    <div className="Pesquisa">
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/QuemSomos">Quem Somos</Link>
          </li>
          <li>
            <Link to="/ProdutosFiltrados">Produtos</Link>
          </li>
          <li>
            <input
              id="idInputPesquisa"
              type="text"
              placeholder="O que você procura?..."
            />
            <button onClick={pesquisaProd} id="idButonPesquisa">
              <img src={search} alt="procura" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pesquisa;
