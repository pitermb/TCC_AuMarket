//JS para montar tabela com produtos cadastrados
function tabela_cadprodutos() {
  //array para produtos do banco
  var produtoBanco = [];
  // requisição do banco (array de objetos produtos)
  let xhr = new XMLHttpRequest();
  xhr.open('GET', "/api/products", true);
  xhr.addEventListener("load", function () {
    var resposta = xhr.responseText;
    var resp = JSON.parse(resposta);
    if (resp.length > 0) {
      produtoBanco = resp;
      produtoBanco.forEach(function (elemento) {
        //remonta o objeto para construção para colocar nos campos da tabela
        var produto = {
          _id: elemento._id,
          codigo: elemento.codigo,
          nome: elemento.nome,
          peso: elemento.peso,
          preco: elemento.preco,
          quantidade: elemento.quantidade,
        }
        // Criando linhas da tabela
        var produtoTr = document.createElement("tr");
        produtoTr.appendChild(montaTd(produto._id, "tdIdProduto"));
        produtoTr.appendChild(montaTd(produto.codigo, "tdCodProdruto"));
        produtoTr.appendChild(montaTd(produto.nome, "tdNomeProduto"));
        produtoTr.appendChild(montaTd(produto.peso, "tdPesoProduto"));
        produtoTr.appendChild(montaTd(produto.preco, "tdClProdutoPreco"));
        produtoTr.appendChild(montaTd(produto.quantidade, "tdClProdutoQuantidade"));
        produtoTr.appendChild(montaTdButton(produto._id));
        tBody.appendChild(produtoTr)
        return produtoTr;
        //cria campos da tabala 
        function montaTd(dado, classe) {
          var produtoTd = document.createElement("td");
          produtoTd.textContent = dado;
          produtoTd.classList.add(classe);
          return produtoTd;
        }
        // cria um botão de excluir para cada elemento
        function montaTdButton(id) {
          var produtoTd = document.createElement("td");
          var produtoTdButton = document.createElement("a");
          produtoTdButton.textContent = "Excluir";
          produtoTdButton.classList.add("btnExcluir");
          produtoTdButton.addEventListener('click', function () {
            //Confirma a exclusão do produto no banco de dados
            var confirma = window.confirm("Tem certeza que deseja excluir este item: " + id + " ?")
            if (confirma) {              
              //requisição para excluir caso confirme
              var xhr = new XMLHttpRequest();
              xhr.open("GET", '/api/product/' + id);
              xhr.send();
              //remove a linha do html 
              if (resp.length > 0) {
                produtoTd.parentNode.remove();
              }
            }
          });
          //monta o botão
          produtoTd.appendChild(produtoTdButton);
          return produtoTd;
        }
      })
    } else {
      alert("Sem produtos no Banco de Dados!\nCadastre mais produtos.");
    }
  });

  xhr.send();

  //pegando body
  var tBody = document.querySelector("#tBody");
  tBody.innerHTML = ""
}

export default tabela_cadprodutos;