import React from "react";
import "./Cadastro.css";
import validaCEP from "../../js/CadastroUser/validaCEP";
import validaCPF from "../../js/CadastroUser/validaCPF";
import { Redirect } from "react-router";
import InputMask from "react-input-mask";

//Pagina de cadastro de cliente
function Cadastro() {
  const [state, setState] = React.useState({ redirect: false });

  const cadastrarUser = function (event) {
    //comportamento padrao do formulario
    event.preventDefault();

    //Removendo mask do CPF para armazenar e validar
    var cad_Cpf = document.getElementById("idCadCPF").value; 
    //Armazenando Nome
    var cad_Nome = document.getElementById("idCadNome").value; 
    //Armazenando Telefone
    var cad_TelCt = document.getElementById("idCadTel").value; 
    //Armazenando E-mail
    var cad_Email = document.getElementById("idCadEmail").value; 
    var cad_CfmEmail = document.getElementById("idCfmEmail").value;
    //Armazenando Senha
    var cad_Senha = document.getElementById("idCriarSenha").value; 
    var cad_CfmSenha = document.getElementById("idCfmSenha").value;

    //Armazenando CEP para validar futuramente
    var cadEnd_CEP = document.getElementById("cep").value; 
    //Armazenando UF (estado)
    var cadEnd_UF = document.getElementById("uf").value; 
    //Armazenando Cidade
    var cadEnd_Cidade = document.getElementById("localidade").value; 
    //Armazenando Bairro
    var cadEnd_Bairro = document.getElementById("bairro").value; 
    //Armazenando Rua
    var cadEnd_Rua = document.getElementById("logradouro").value; 
    //Armazenando Número da Casa
    var cadEnd_NumCs = document.getElementById("número").value; 
    //Armazenando Complemento caso usuário tenha informado algo
    var cadEnd_Compl = document.getElementById("complemento").value; 

    //verificar se email corresponde ao digitado
    if (cad_Email === cad_CfmEmail) {
    //verificar se senha corresponde a digitada
      if (cad_Senha === cad_CfmSenha) {
        //requisição
        var xhr = new XMLHttpRequest();

        xhr.open("POST", "/api/user", true);

        // Envia a informação do cabeçalho junto com a requisição.
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );

        xhr.send(
          `cad_Cpf=${cad_Cpf}&cad_Nome=${cad_Nome}&cad_Tel=${cad_TelCt}&cad_Email=${cad_Email}&cad_CriarSenha=${cad_Senha}&cad_Cep=${cadEnd_CEP}&cad_Uf=${cadEnd_UF}&cad_Cidade=${cadEnd_Cidade}&cad_Bairro=${cadEnd_Bairro}&cad_Endereco=${cadEnd_Rua}&cad_NumCasa=${cadEnd_NumCs}&cad_CompCasa=${cadEnd_Compl}`
        );

        alert("Cadastro Efetuado com Sucesso!");

        setState({ redirect: true });
      } else {
        alert("Sua senha está incorreta!");
      }
    } else {
      alert("Seu e-mail está incorreto!");
    }
  };
  //redireciona para o login
  if (state.redirect) {
    return <Redirect push to="/Login" />;
  }

  //renderização do componente
  return (
    <div className="container1">
      <div className="text-top-line">
        <h2>CADASTRO CLIENTE</h2>
        <small>Todos os dados com * são obrigatórios</small>
      </div>

      <form onSubmit={cadastrarUser}>
        <div className="cadastro-form-container">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="idCadCPF" className="labelCPF">
                *CPF
              </label>
              <InputMask mask="999.999.999-99" onBlur={validaCPF}>
                {() => (
                  <input
                    className="form-control"
                    type="text"
                    id="idCadCPF"
                    name="cad_Cpf"
                    required
                    placeholder="222.444.888-99"
                  />
                )}
              </InputMask>
              <small className="small">digite somente os numeros</small>
            </div>

            <div className="col-md-8">
              <label htmlFor="idCadNome" className="labelNome">
                *Nome e sobrenome
              </label>
              <input
                className="form-control"
                type="text"
                id="idCadNome"
                name="cad_Nome"
                required
                placeholder="Fulano da Silva Junior"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <label htmlFor="idCadCEP" className="labelCEP">
                *CEP
              </label>
              <InputMask mask="99999-999" onBlur={validaCEP}>
                {() => (
                  <input
                    className="form-control"
                    type="text"
                    id="cep"
                    name="cad_Cep"
                    required
                    placeholder="89046-420"
                  />
                )}
              </InputMask>
            </div>
            <div className="col-md-8">
              <label htmlFor="idCadEndereco" className="labelEndereco">
                *Endereço
              </label>
              <input
                className="form-control"
                type="text"
                id="logradouro"
                name="cad_Endereco"
                required
                placeholder="Rua Exemplo Feito"
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="idCadNum" className="labelNumero">
                *Número
              </label>
              <input
                className="form-control"
                type="text"
                id="número"
                name="cad_NumCasa"
                required
                placeholder="123"
                min="1"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <label htmlFor="idCadComp" className="labelComplemento">
                Complemento
              </label>
              <input
                className="form-control"
                type="text"
                id="complemento"
                name="cad_CompCasa"
                placeholder="APTO 203"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="idCadBairro" className="labelBairro">
                *Bairro
              </label>
              <input
                className="form-control"
                type="text"
                id="bairro"
                name="cad_Bairro"
                required
                placeholder="Velha Central"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="idCadCidade" className="labelCidade">
                *Cidade
              </label>
              <input
                className="form-control"
                type="text"
                id="localidade"
                name="cad_Cidade"
                required
                placeholder="Blumenau"
              />
            </div>

            <div className="col-md-1">
              <label htmlFor="idCadUF" className="labelUF">
                *UF
              </label>
              <input
                className="form-control"
                type="text"
                id="uf"
                name="cad_Uf"
                required
                placeholder="SC"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="idCadTel" className="labelTelefoneCTT">
                *Telefone de contato
              </label>
              <InputMask mask="(99) 99999-9999">
                {() => (
                  <input
                    className="form-control"
                    type="tel"
                    id="idCadTel"
                    name="cad_Tel"
                    required
                    placeholder="(47) 99123-4567"
                  />
                )}
              </InputMask>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <label htmlFor="idCadEmail" className="labelEmail">
                *Email
              </label>
              <input
                className="form-control"
                type="email"
                id="idCadEmail"
                name="cad_Email"
                required
                placeholder="exemploemail@exemplo.com"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="idCadCfmEmail" className="labelCfmEmail">
                *Confirmar E-mail
              </label>
              <input
                className="form-control"
                type="email"
                id="idCfmEmail"
                name="cad_CfmEmail"
                required
                placeholder="Confirme o E-mail"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="idCriarSenha" className="labelCriarSenha">
                *Criar senha
              </label>
              <input
                className="form-control"
                type="password"
                id="idCriarSenha"
                name="cad_CriarSenha"
                required
                placeholder="Crie sua senha"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="idCfmSenha" className="labelCfmSenha">
                *Confirmar senha{" "}
              </label>
              <input
                className="form-control"
                type="password"
                id="idCfmSenha"
                name="cad_CfmSenha"
                required
                placeholder="Confirme a senha"
              />
            </div>
          </div>

          <div className="button-div">
            <p>
              <button
                className="creat-button"
                id="btnCadastrar"
                type="submit"
                disabled
              >
                CADASTRAR
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;