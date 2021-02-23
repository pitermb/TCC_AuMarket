import React, { useState, useMemo } from "react";
import "./ProdutosFiltrados.css";
import { Redirect } from "react-router";

//Tela com produtos com base no filtro
function FiltroCategoria(props) {
  const [Categoria, setCategoria] = useState([]);
  const [state, setState] = useState({ redirect: false });

  useMemo(async () => {
    //Requisição
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "api/product/categoria/" + props.cat, true);
    xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;

      var resp = JSON.parse(resposta);

      //Verifica se há produtos
      if (resp.length > 0) {
        setCategoria(resp);
      } else {
        alert("sem produtos");
      }
    });
    xhr.send();
  },[props.cat])

  //Mandando infos do produto para renderizar
  function chamarProduto(event) {
    //Pegando o valor do produto selecionado
    props.mandaCodProd(event.target.value);
    setState({ redirect: true });
  }
  //Redireciona para "/Produto" apos ser selecionado
  if (state.redirect) {
    return <Redirect push to="/Produto" />;
  }

  //Renderização do componente em loop(.map)
  return (
    <div className="Produtos">
      <section className="loja">
        <div className="outro-produtos">
          <h2>PRODUTOS EM DESTAQUE</h2>
        </div>
        <div className="row">
          {Categoria.map((produto) => (
            <div className="card-destaque" key={`0${produto._id}`}>
              <div className="img-container" key={`1${produto._id}`}>
                <img src={`./images/${produto.codigo}`} alt="ExemploImagem" key={`2${produto._id}`} />
              </div>
              <p className="poduto-id" hidden key={`3${produto._id}`}>
                {produto._id}
              </p>
              <p className="produto-nome" key={`4${produto._id}`}>
                {produto.nome}
              </p>
              <button
                key={`5${produto._id}`}
                onClick={chamarProduto}
                value={produto._id}
              >
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

export default FiltroCategoria;
