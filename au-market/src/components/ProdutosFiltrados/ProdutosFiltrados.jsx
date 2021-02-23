import React, { useState, useMemo } from "react";
import "./ProdutosFiltrados.css";
import { Redirect } from "react-router";

//Renderização dos produto na loja
function ProdutosFiltrados(props) {
  const [Produtos, setProdutos] = useState([]);
  const [state, setState] = useState({ redirect: false });

  useMemo(async () => {
    //Requisição
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/products", true);
    xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;
   
      var resp = JSON.parse(resposta);
   
      if (resp.length > 0) {
        setProdutos(resp);
      }
    });
    xhr.send();
  }, [])

  //Mandando id do produto para renderizar
  function chamarProduto(event) {
    props.mandaCodProd(
      event.target.parentNode.querySelector(".produto-id").textContent
    );
    setState({ redirect: true });
  }
  //Redireciona para o Produto
  if (state.redirect) {
    return <Redirect push to="/Produto" />;
  }

  //Renderização do componente com loop(.map)
  return (
    <div className="Produtos">
      <section className="loja">
        <div className="outro-produtos">
          <h2>PRODUTOS EM DESTAQUE</h2>
        </div>
        <div className="row">
          {Produtos.map((produto) => (
            <div className="card-destaque" key={`0${produto._id}`}>
              <div className="img-container" key={`1${produto._id}`}>
                <img src={`./images/${produto.codigo}`} alt="ExemploImagem" key={`2${produto._id}`} />
              </div>
              <p className="produto-id" hidden key={`3${produto._id}`}>
                {produto._id}
              </p>
              <p className="produto-nome" key={`4${produto._id}`}>
                {produto.nome}
              </p>
              <button key={`5${produto._id}`} onClick={chamarProduto}>
                VER PRODUTO
              </button>

              <p className="produto-preco" key={`6${produto._id}`}>
                {" "}
                R${Number(produto.preco).toFixed(2).replace(".", ",")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProdutosFiltrados;
