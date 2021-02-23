import React, { useState, useMemo } from "react";
import "./Produto.css";
import { Redirect } from "react-router";

//Tela de Produto
function Produto(props) {
  const [Produto, setProduto] = useState([]);
  const [state, setState] = useState({ redirect: false });

  useMemo(async () => {
    //requisicão
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/oneproduct/" + props.cod, true);
    xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;

      var resp = JSON.parse(resposta);

      setProduto(resp[0]);
    });
    xhr.send();
  },[props.cod]);

  //Adiciona ao carrinho o produto
  const adicionaCarrinho = function () {
    props.adicionaCar(Produto._id, Produto.nome, Produto.peso, Produto.preco);
    setTimeout(() => {
      setState({ redirect: true });
    }, 100);
  };

  //Redireciona para tela de "carrinho1"(login)
  if (state.redirect) {
    return <Redirect push to="/Carrinho1" />;
  }

  //Renderização do componente
  return (
    <div className="container4">
      <section className="descricao">
        <h2>Produto</h2>
        <div className="row">
          <div className="col-md-3 img-produto">
            <img src={`./images/${Produto.codigo}`} alt="ExemploImagem"/>
          </div>
          <div className="col-md-6">  
            <h4>{Produto.nome}</h4>
            <p hidden>{Produto._id}</p>
            <p className="codigo">CÓD. 14865</p>
            <p className="item">{Produto.descricao}</p>
          </div>
          <div className="col-md-3">
            <p className="estoque">* EM ESTOQUE</p>
            <p className="item">Peso do produto: {Produto.peso} Kg</p>
            <h2 hidden>{Produto.categoria}</h2>
            <p id="precoFinal">
              R$ {Number(Produto.preco).toFixed(2).replace(".", ",")}
            </p>

            <button className="yellow-btn" onClick={adicionaCarrinho}>
              {" "}
              COMPRAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Produto;
