//Verifica se há o cpf no banco
const cpfCadastrado = function (cpf) {

  //requisição
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "/api/user/cpf/" + cpf);

  xhr.addEventListener("load", function () {

    var resposta = xhr.responseText;

    var resp = JSON.parse(resposta);

    //Testa se o cpf foi encontrado no DB
    if (resp.length > 0) {
      alert("Usuario já cadastrado no sistema!")
      document.getElementById("btnCadastrar").disabled = true

    }
  });

  xhr.send();

}

export default cpfCadastrado;