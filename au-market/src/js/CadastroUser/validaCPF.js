//JS para validar CPF
import cpfCadastrado from './cpfCadastrado';

const validaCPF = function () {
  //pegando cpf
  var cpf = document.querySelector("#idCadCPF")
  //replace para formatar o mumero digitado
  var cpfValida = cpf.value.replace(/[.-]/g, "")
  //botao para cadastro
  var acessoBtnCad = true

  //Verifica se CPF ja está cadastrado
  cpfCadastrado(cpf.value)

  //verificação de cada numero
  let soma = 0;
  soma += cpfValida[0] * 10;
  soma += cpfValida[1] * 9;
  soma += cpfValida[2] * 8;
  soma += cpfValida[3] * 7;
  soma += cpfValida[4] * 6;
  soma += cpfValida[5] * 5;
  soma += cpfValida[6] * 4;
  soma += cpfValida[7] * 3;
  soma += cpfValida[8] * 2;
  soma = (soma * 10) % 11;
  if (soma === 10 || soma === 11) {
    soma = 0;

  }

  if (soma !== Number(cpfValida[9])) {
    acessoBtnCad = false;

  }

  soma = 0;
  soma += cpfValida[0] * 11;
  soma += cpfValida[1] * 10;
  soma += cpfValida[2] * 9;
  soma += cpfValida[3] * 8;
  soma += cpfValida[4] * 7;
  soma += cpfValida[5] * 6;
  soma += cpfValida[6] * 5;
  soma += cpfValida[7] * 4;
  soma += cpfValida[8] * 3;
  soma += cpfValida[9] * 2;
  soma = (soma * 10) % 11;

  if (soma === 10 || soma === 11) {
    soma = 0;

  }

  if (soma !== Number(cpfValida[10])) {
    acessoBtnCad = false;
  }

  if (acessoBtnCad === false) {
    document.getElementById("btnCadastrar").disabled = true
    alert("Digite seu CPF corretamente")

  } else {
    //aceita a entrada do cpf digitado
    document.getElementById("btnCadastrar").disabled = false

  }
}
export default validaCPF;