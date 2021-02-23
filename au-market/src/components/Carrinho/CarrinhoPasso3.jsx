import React from "react";
import { Redirect } from "react-router-dom";
import "./Carrinho.css";

//terceiro passo para a compra de um produto(finalização)
function CarrinhoPasso3(props) {
  const [state, setState] = React.useState({ redirect: false });

  //verifica se o usuario esta logado
  const validaLogin = function () {
    if (props.session === false) {
      setState({ redirect: true });
    } else {
      //Chamada para esvaziar o carrinho para novas compras chamada por props
      setTimeout(() => {
        props.esvaziaCar();
      }, 100);
    }
  };
  //redireciona para tela inicial caso nao esteja logado
  if (state.redirect) {
    return <Redirect push to="/" />;
  }

  //Renderização do componente
  return (
    <div onLoad={validaLogin()}>
      <div>
        <div className="container6">
          <div className="btns-container">
            <button className="btn-carrinho">Passo 1</button>
            <button className="btn-carrinho">Passo 2</button>
            <button className="btn-carrinho etapa">Passo 3</button>
          </div>

          <div className="pedido">
            <h3>PEDIDO REALIZADO COM SUCESSO</h3>
            <div className="resul">
              <p>Seu pedido é o número: </p>
              <p id="numPedido">{props.pedido}</p>
            </div>
            <p>VOCÊ RECEBERÁ UM E-MAIL COM AS INFORMAÇÕES DA SUA COMPRA</p>
            <h5>OBRIGADO POR COMPRAR COM A GENTE!</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarrinhoPasso3;
