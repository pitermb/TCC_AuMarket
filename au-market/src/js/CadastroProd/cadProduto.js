//JS para cadastrar produtos
const cadastrar_produto = function (event) {
  //Comportamento padrão do formulario
  event.preventDefault();

  //codigo do produto
  var cad_CodProduto = document.getElementById("idCodProduto").value;
  // nome do produto
  var cad_NomeProduto = document.getElementById("idNomeProduto").value;
  // categoria do produto
  var cad_CatProduto = document.getElementById("idCatProduto").value;
  // descrição do produto
  var cad_DescProduto = document.getElementById("idDescProduto").value;
  //peso do produto
  var cad_PesoProduto = Number(
    document.getElementById("idPesoProduto").value.replace(/[,]/g, ".")
  );
  //quantidade em estoque do produto
  var cad_QntEstoque = Number(document.getElementById("idQntEstoque").value);
  //preço do produto
  var cad_PrecoVenda = Number(
    document.getElementById("idPrecoVenda").value.replace(/[,]/g, ".")
  );
  //foco no primeiro campo da tela
  document.getElementById("idCodProduto").focus();

  //requisição
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "/api/product", true);

  // Envia a informação do cabeçalho junto com a requisição.
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  //mandando informações
  xhr.send(`cad_CodProduto=${cad_CodProduto}&cad_NomeProduto=${cad_NomeProduto}&cad_CatProduto=${cad_CatProduto}&cad_DescProduto=${cad_DescProduto}&cad_PesoProduto=${cad_PesoProduto}&cad_QntEstoque=${cad_QntEstoque}&cad_PrecoVenda=${cad_PrecoVenda}`);

  event.target.reset()
}

export default cadastrar_produto;