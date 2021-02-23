import React, { useState } from "react";
import "./Carrinho.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

function CarrinhoPasso1(props) {
  //recebe os produtos para o carrinho
  let carrinho = props.prod;

  //States para Redirect
  const [state, setState] = useState({ redirect: false });
  //States para Lista de Produtos no carrinho
  const [lista, setLista] = useState(carrinho);
  //States para continuar
  const [continuar, setContinuar] = useState({ redirectFim: false });

  //Soma dos produtos do carrinho
  var somaFim = 0;
  const tabelaProdCompra = function () {
    let soma = 0;
    if (lista.length > 0) {
      for (var i = 0; i < lista.length; i += 1) {
        soma += lista[i]["preco"];
      }
      return (somaFim = soma.toFixed(2).replace(".", ","));
    }
  };

  //Exclui produto
  function excluirProduto(e) {
    //Confirma a exclusão do item no carrinho
    var confirma = window.confirm("Deseja excluir este item: " + e.target.parentNode.name + " do carrinho?")
    if (confirma){
      function findWithAttr(array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i][attr] === value) {
            return i;
          }
        }
        return -1;
      }
      lista.splice(findWithAttr(lista, "id", e.target.parentNode.id), 1);
      setLista(lista);
    } 
  }

  //Var para Botao Continuar
  var botaoFinliza = true;
  const botaoContinuar = function () {
    //Verifica se há produtos no carrinho, se vazio botao de continuar compra é desabilitado
    if (props.prod.length > 0) {
      return (botaoFinliza = false);
    }
  };

  //Redireciona para o passo 2
  function botaoClick() {
    setContinuar({ redirectFim: true });
  };
  if (continuar.redirectFim) {
    return <Redirect push to="/Carrinho2" />;
  }

  //verifica se o usuario esta logado
  const validaLogin = function () {
    if (props.session === false) {
      setState({ redirect: true });
    } else {
      //Se Logado, carrega a tabela de produtos no carrinho
      tabelaProdCompra();
      botaoContinuar();
    }
  };

  //redireciona para tela inicial
  if (state.redirect) {
    return <Redirect push to="/Login" />;
  }
  //Renderização do componente
  return (
    <div onLoad={validaLogin()}>
      <div className="container6">
        <div className="btns-container">
          <button className="etapa btn-carrinho">Passo 1</button>
          <button className="btn-carrinho">Passo 2</button>
          <button className="btn-carrinho">Passo 3</button>
        </div>
        <table className="tbClProdutos" id="tbIdProdutos">
          <thead id="thIdProdutos" hidden>
            <tr className="trClProdutos">
              <th className="thClProdutoCodigo">Codigo</th>
              <th className="thClNomeProduto">Nome</th>
              <th className="thClPrecoProduto">Preço</th>
              {/* <th className="thClQuantidade">Quantidade</th> */}
              <th className="thClBotao">botao</th>
            </tr>
          </thead>
          <tbody id="tboIdLinha">
            {lista.map((produto) => (
              <tr id={produto.id} key={`0${produto.id}`}>
                <td key={`1${produto.id}`} className="tdClProdutoNome">
                  {produto.id}
                </td>
                <td key={`2${produto.id}`} className="tdClProdutoNome">
                  {produto.nome}
                </td>
                <td key={`3${produto.id}`} className="tdClProdutoNome">
                  R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
                </td>
                {/* <td key={`5${produto.id}`}>{produto.quantidade}</td> */}
                <td id={produto.id}>
                  {" "}
                  <Link to="/Carrinho1" id={produto.id} name={produto.nome}>
                    {" "}
                    <button className="btnExcluir" onClick={excluirProduto}>
                      Excluir
                    </button>
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="botoesFinalizacao">
          <div className="finalizar">
            <p id="pagar" className="precoTotal">
              R$ {somaFim}
            </p>
          </div>
        </div>
        <div className="btn-container">
          <div className="btn-mais">
            <Link to="/ProdutosFiltrados">
              <button id="mais" className="yellow-btn">
                COMPRAR MAIS
              </button>
            </Link>
            <button
              className="yellow-btn"
              type="button"
              disabled={botaoFinliza}
              id="btnFinalizar"
              onClick={botaoClick}
            >
              CONTINUAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarrinhoPasso1;
