//Rotas para renderização
import { Switch, Route } from "react-router-dom";

import React, { useState } from "react";

import HeaderUm from "./components/Header/HeaderUm";
import HeaderDois from "./components/Header/HeaderDois";
import Footer from "./components/Footer/Footer";

import MainHome from "./components/Home/MainHome";
import Cadastro from "./components/Cadastro/Cadastro";
import Login from "./components/Login/Login";

import FiltroCategoria from "./components/ProdutosFiltrados/FiltroCategoria";
import ProdutosFiltrados from "./components/ProdutosFiltrados/ProdutosFiltrados";
import Produto from "./components/Produto/Produto";
import FiltroPesquisa from "./components/ProdutosFiltrados/FiltroPesquisa";

import NotFound from "./components/404/NotFound";
import QuemSomos from "./components/QuemSomos/QuemSomos";

import CarrinhoPasso1 from "./components/Carrinho/CarrinhoPasso1";
import CarrinhoPasso2 from "./components/Carrinho/CarrinhoPasso2";
import CarrinhoPasso3 from "./components/Carrinho/CarrinhoPasso3";

import CadastroProduto from "./components/CadastroProd/CadastroProduto";

const Router = function () {
  //////////////// ACESSO HABILITADO /////////////////
  const [session, setSession] = useState(false);
  const acessoHab = function (session) {
    setSession(session);
  };

  //////////////// TROCAR HEADER (LOGIN)//////////////////
  const [Header, setHeader] = useState(<HeaderUm />);
  const trocarHeader = function (user) {
    setHeader(<HeaderDois user={user} />);
  };

  /////////////// MANDA COD PROD //////////////////
  const [codProd, setCodProd] = useState("");
  function mandaCodProd(cod) {
    setCodProd(cod);
  }

  /////////////// MANDA CATEGORIA da home para filtro categoria/////////////////////
  const [categoria, setCategoria] = useState("");
  function mandaCategoria(cat) {
    setCategoria(cat);
  }

  ////////// ADICIONA PROD PEDIDO ///////////
  const [prod, setProd] = useState([]);
  function adicionaCar(id, nome, peso, preco) {
    var prodCompAdd = { id, nome, peso, preco };
    
    //Verifica se nao existe nenhum item no carrinho, caso nao exista, ele adiciona o primeiro item
    if (prod.length === 0) {
      setProd([...prod, prodCompAdd]);
    }
    //Laço de verificação de quantos produtos tem no carrinho
    for (let i = 0; i < prod.length; i++) {
      //Se o id do produto novo adicionado for igual a algum ja existente no carrinho... 
      if (id === prod[i].id) {
        //Ele irá pedir uma confirmação para adicionar novamente
        //assim substituindo a falta da validação de quantidade
        var confirma = window.confirm("Este produto já se esta no carrinho, deseja adicionar novamente?")
        //Caso confirme, ele adiciona o mesmo produto no carrinho
        if (confirma){  
          setProd([...prod, prodCompAdd]);
        }
        //Caso nao existe um produto igual na hora de adicionar um produto novo, ele irá adicionar normalmente
      } else {
        setProd([...prod, prodCompAdd]);
      }
    }
  }

  // Esvaziar Carrinho após Finalizar //
  const [reseta] = useState([]);
  function esvaziaCar() {
    setProd(reseta);
  }

  ////////// FINALIZA PEDIDO ///////////
  const [pedido, setPedido] = useState([]);
  function fimPedido(id) {
    setPedido(id);
  }

  //////////// ADICIONA CLIENTE PEDIDO ////////////
  const [cliente, setCliente] = useState("");
  function adicionaCliente(cliente) {
    setCliente(cliente);
  }

  //////////// ADICIONA EMAIL CLIENTE PEDIDO ////////////
  const [email, setEmail] = useState("");
  function adicionaEmailCliente(email) {
    setEmail(email);
  }

  //////// Filtro Pesquisa Produto ////////
  const [pesq, setPesq] = React.useState("");
  function pesquisado(id) {
    setPesq(id);
  }

  //Passado props pelos componentes e estabelecendo rota Switch
  return (
    <div>
      {Header}
      <Switch>

        <Route
          path="/"
          exact
          render={(props) => (
            <MainHome
              {...props}
              mandaCategoria={mandaCategoria}
              pesquisado={pesquisado}
            />
          )}
        />

        <Route
          path="/Login"
          render={(props) => (
            <Login
              {...props}
              trocarHeader={trocarHeader}
              acessoHab={acessoHab}
              adicionaCliente={adicionaCliente}
              adicionaEmailCliente={adicionaEmailCliente}
            />
          )}
        />

        <Route path="/Cadastro" component={Cadastro} />

        <Route
          path="/ProdutosFiltrados"
          render={(props) => (
            <ProdutosFiltrados 
              {...props} 
              mandaCodProd={mandaCodProd} 
            />
          )}
        />

        <Route
          path="/FiltroCategoria"
          render={(props) => (
            <FiltroCategoria
              {...props}
              mandaCodProd={mandaCodProd}
              cat={categoria}
            />
          )}
        />

        <Route
          path="/FiltroPesquisa"
          render={(props) => (
            <FiltroPesquisa
              {...props}
              mandaCodProd={mandaCodProd}
              pesq={pesq}
            />
          )}
        />
        <Route
          path="/Produto"
          render={(props) => (
            <Produto 
              {...props} 
              cod={codProd} 
              adicionaCar={adicionaCar} 
            />
          )}
        />

        <Route path="/QuemSomos" component={QuemSomos} />

        <Route
          path="/Carrinho1"
          render={(props) => (
            <CarrinhoPasso1 
              {...props} 
              session={session} 
              prod={prod} 
            />
          )}
        />

        <Route
          path="/Carrinho2"
          render={(props) => (
            <CarrinhoPasso2
              {...props}
              trocarHeader={trocarHeader}
              session={session}
              prod={prod}
              cliente={cliente}
              email={email}
              fimPedido={fimPedido}
            />
          )}
        />

        <Route
          path="/Carrinho3"
          render={(props) => (
            <CarrinhoPasso3
              {...props}
              trocarHeader={trocarHeader}
              session={session}
              email={email}
              pedido={pedido}
              prod={prod}
              esvaziaCar={esvaziaCar}
            />
          )}
        />

        <Route path="/CadastroProduto" component={CadastroProduto} />

        <Route
          component={() => (
            <div>
              <NotFound />
            </div>
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default Router;
