import React from "react";
import "./Login.css";
import logImg from "../../images/login.png";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

//Tela de login de usuario
function Login(props) {
  const [state, setState] = React.useState({ redirect: false });

  const validaUser = function (event) {
    event.preventDefault();

    //CPF do usuario
    var cpf = document.getElementById("idLogCPF").value;
    //Senha do usuario
    var senha = document.getElementById("idLogSenha").value;

    //Requisição e validação
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "/api/user/cpf/" + cpf);

    xhr.addEventListener("load", function () {
      var resposta = xhr.responseText;

      var resp = JSON.parse(resposta);

      if (resp.length > 0) {
        //Testa se o cpf foi encontrado no DB
        if (resp[0].senha === senha) {
          alert("Acesso Autorizado");
          setState({ redirect: true });
          var session = true;
          props.trocarHeader(resp[0].nome);
          props.acessoHab(session);
          props.adicionaCliente(resp[0]._id);
          props.adicionaEmailCliente(resp[0].email);
        } else {
          alert("Senha inválida");
        }
      } else {
        alert("Usuário não cadastrado");
      }
    });

    xhr.send();
  };

  if (state.redirect) {
    return <Redirect push to="/" />;
  }

  //Renderização do componente
  return (
    <div className="tudo">
      <div className="container2">
        {/* Executa a função de validação ao pressionar o botao */}
        <form className="form" onSubmit={validaUser}>
          <h2>JÁ SOU CLIENTE</h2>
          <div className="in">
            <label htmlFor="idLogCPF" className="labelLogCPF">
              CPF
            </label>
            <br />
            <InputMask mask="999.999.999-99">
              {() => (
                <input
                  className="logCpf"
                  type="text"
                  id="idLogCPF"
                  name="log_Cpf"
                  required
                  placeholder="222.444.888-99"
                />
              )}
            </InputMask>
          </div>
          <div className="in">
            <label htmlFor="idLogSenha" className="labelLogSenha">
              Senha
            </label>
            <br />
            <input
              className="logSenha"
              type="password"
              id="idLogSenha"
              name="cad_LogSenha"
              required
              placeholder="Insira sua senha"
            />
          </div>
          <br />
          <button className="creat-button btnLogin" id="btnLogar" type="submit">
            <i className="fa fa-lock"></i>ENTRAR
          </button>

          <label>É novo(a) por aqui?</label>
          <Link to="/Cadastro">
            <button className=" creat-button btnLogin" type="button">
              CRIAR CONTA
            </button>
          </Link>
        </form>

        <div className="fundoLogin">
          <div className="imagem-container">
            <img id="imglog" src={logImg} alt="ImagemDog" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
