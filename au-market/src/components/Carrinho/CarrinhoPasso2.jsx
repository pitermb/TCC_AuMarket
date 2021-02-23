import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import InputMask from "react-input-mask";
import enviar from "../../js/EnviarEmail/enviar.js";
import "./Carrinho.css";

//segundo passo para a compra de um produto(pagamento)
function CarrinhoPasso2(props) {
  const [finalizar, setFinalizar] = useState({ redirectFim: false });
  const [state, setState] = React.useState({ redirect: false });

  //Sequencia lógica de cada cartao
  var numCartao;
  var cartoes = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})/,
    Mastercard: /^5[1-5][0-9]{14}/,
  };

  //Recebe numero do cartao e sequencias logicas p/ teste de validade
  function testarCC(nr, cartoes) {
    for (var cartao in cartoes) {
      if (nr.match(cartoes[cartao])) {
        return cartao;
      }
    }
  }
  //Chama a validacao do cartão (blur)
  const validaCC = function () {
    numCartao = document.getElementById("idNumCartao").value;
    var bandeira = testarCC(numCartao, cartoes);
    if (bandeira === undefined) {
      alert("Digite um cartão válido");
    }
  };

  //Verifica se o usuario esta logado, se nao, volta pra home
  const validaLogin = function () {
    if (props.session === false) {
      setState({ redirect: true });
    }
  };
  //Redireciona para tela inicial
  if (state.redirect) {
    return <Redirect push to="/" />;
  }

  const finalizarCompra = function (event) {
    //Corportamento de parar a execução do form
    event.preventDefault();

    var numCartao = document.getElementById("idNumCartao").value;
    var nomeCartao = document.getElementById("idNomeCartao").value;
    var dataCartao = document.getElementById("idValidade").value;
    var cvcCartao = document.getElementById("idCVC").value;

    //Armarzenando Info de Cartao, Cliente Comprador e Produtos Comprados
    var pedidoFinal = {
      cartao: {
        num: numCartao,
        nome: nomeCartao,
        data: dataCartao,
        cvc: cvcCartao,
      },
      cliente: props.cliente,
      produtos: props.prod,
    };

    //Transformando o Objeto PedidoFinal em String
    var pedidoJSON = JSON.stringify(pedidoFinal);

    //requisição
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/pedido", true);

    // Envia a informação do cabeçalho junto com a requisição.
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;
      var resp = JSON.parse(resposta);
      //recebe o numero do pedido do banco e manda pro router
      props.fimPedido(resp._id);
    });

    xhr.send(pedidoJSON);

    setFinalizar({ redirectFim: true });
    //recebe o e-mail por props e envia para funcao enviar
    enviar(props.email);
  };
  //Redireciona para o passo 3
  if (finalizar.redirectFim) {
    return <Redirect push to="/Carrinho3" />;
  }

  //Renderização do componente
  return (
    <div onLoad={validaLogin()}>
      <div className="container6">
        <div className="btns-container">
          <button className="btn-carrinho">Passo 1</button>
          <button className="btn-carrinho etapa">Passo 2</button>
          <button className="btn-carrinho">Passo 3</button>
        </div>
        <div className="pagamento-container">
          <h3>Forma de Pagamento</h3>
          <div className="pagamentos">
            <label>* Adicione as informações do seu cartão</label>
          </div>
        </div>
        <form onSubmit={finalizarCompra}>
          <div className="dados-cartao">
            <div className="numero-content">
              <label htmlFor="idNumCartao">Número do Cartão:</label>
              <br />
              {
                <InputMask mask="9999999999999999" onBlur={validaCC}>
                  {() => (
                    <input
                      type="text"
                      name="numcartao"
                      id="idNumCartao"
                      required
                      placeholder="0000 0000 0000 0000"
                    />
                  )}
                </InputMask>
              }
            </div>
            <div className="nome-content">
              <label htmlFor="idNomeCartao">Nome titular:</label>
              <br />
              <input
                type="text"
                name="nomeCartao"
                id="idNomeCartao"
                required
                placeholder="Idêntico ao do cartão"
              />
            </div>
            <div className="validade-content">
              <label htmlFor="idValidade">Validade:</label>
              <br />
              <InputMask mask="99/99">
                {() => (
                  <input
                    type="text"
                    name="validadeCartao"
                    id="idValidade"
                    required
                    placeholder="mês/ano"
                  />
                )}
              </InputMask>
            </div>
            <div className="cvc-content">
              <label htmlFor="idCVC">CVC:</label>
              <br />
              <InputMask mask="999">
                {() => (
                  <input
                    type="text"
                    name="cvcCartao"
                    id="idCVC"
                    required
                    placeholder="000"
                  />
                )}
              </InputMask>
            </div>
          </div>
          <div className="btn-container">
            <button className="yellow-btn" type="submit">
              FINALIZAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CarrinhoPasso2;
