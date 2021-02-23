import React, { useState, useMemo } from "react";
import "./ProdutosFiltrados.css";
import { Redirect } from "react-router";

function FiltroPesquisa(props) {
  const [Pesquisa, setPesquisa] = useState([]);
  const [state, setState] = useState({ redirect: false });

  useMemo(() => {
    var xhr = new XMLHttpRequest();
    //string que o usuario digitou
    xhr.open("GET", "/api/product/descricao/" + props.pesq);

    xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;

      var resp = JSON.parse(resposta);

      setPesquisa(resp);
    });
    xhr.send();
  }, [props.pesq]);

  function chamarProduto(event) {
    props.mandaCodProd(event.target.value);
    
    setTimeout(() => {
      setState({ redirect: true });
    }, 100);
  }

  if (state.redirect) {
    return <Redirect push to="/Produto" />;
  }

  return (
    <div className="Produtos">
      <section className="loja">
        <div className="outro-produtos">
          <h2>PRODUTOS EM DESTAQUE</h2>
        </div>
        <div className="row">
          {Pesquisa.map((produto, index) => (
            <div className="card-destaque" key={index}>
              <div className="img-container" key={`0${produto._id}`}>
                <img
                  src={`./images/${produto.codigo}`}
                  alt="ExemploImagem"
                  key={produto.codigo}
                />
              </div>
              <p className="poduto-id" hidden key={produto._id}>
                {produto._id}
              </p>
              <p className="produto-nome" key={produto.nome}>
                {produto.nome}
              </p>
              <button
                key={`1${produto._id}`}
                onClick={chamarProduto}
                value={produto._id}
              >
                VER PRODUTO
              </button>

              <p className="produto-preco" key={produto.preco}>
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

export default FiltroPesquisa;
