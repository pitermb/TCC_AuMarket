//Enviar e-mail para o usuario sobre confirmação de compra
const enviar = function (email) {
  //requisição
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "/api/email" + email);

  xhr.send();
};

export default enviar;