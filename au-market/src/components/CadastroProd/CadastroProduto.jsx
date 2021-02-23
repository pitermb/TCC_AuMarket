import React from "react";
import { useEffect } from "react";
import cadastrar_produto from "../../js/CadastroProd/cadProduto";
import tabela_cadprodutos from "../../js/CadastroProd/tabelaCadProd";
import "./CadastroProduto.css";

//Pagina de cadastro de produto(ADM)
function CadastroProduto() {

  useEffect(() => {
    tabela_cadprodutos();
  });

  //renderização do componente
  return (
    <div>
      <div className="container12">
        <h2>Cadastro de produtos</h2>
        <form id="formCadastrarProduto" onSubmit={cadastrar_produto}>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="idCodProduto" className="">
                Código do produto:
              </label>
              <input
                type="text"
                name="cad_CodProduto"
                id="idCodProduto"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="idNomeProduto" className="">
                Nome do produto:
              </label>
              <input
                type="text"
                name="cad_NomeProduto"
                id="idNomeProduto"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="idCatProduto" className="">
                Categoria do produto:
              </label>
              <select
                name="cad_CatProduto"
                id="idCatProduto"
                className="form-control"
              >
                <option value="Racao">Ração</option>
                <option value="HigieneLimpeza">Higiênie e Limpeza</option>
                <option value="Caminhas">Caminhas</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="idDescProduto" className="">
                Descrição do Produto
              </label>
              <textarea
                type="textarea"
                name="cad_DescProduto"
                id="idDescProduto"
                rows="8 "
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="idPesoProduto" className="">
                Peso do produto (Kg):
              </label>
              <input
                type="text"
                name="cad_PesoProduto"
                id="idPesoProduto"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="idQntEstoque" className="">
                Quantidade em Estoque:
              </label>
              <input
                type="number"
                name="cad_QntEstoque"
                id="idQntEstoque"
                className="form-control"
                step="1"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="idPrecoVenda" className="">
                Preço de Venda:
              </label>
              <input
                type="text"
                name="cad_PrecoVenda"
                id="idPrecoVenda"
                className="form-control"
              />
            </div>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn-add" >
              ADICIONAR
            </button>
          </div>
        </form>
      </div>
      <div className="table_container table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID do Banco</th>
              <th scope="col">cod do Produto</th>
              <th scope="col">Nome do Produto</th>
              <th scope="col">Peso do Produto</th>
              <th scope="col">Preço de Venda </th>
              <th scope="col">Quantidade em Estoque</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="tBody"></tbody>
        </table>
      </div>
    </div>
  );
}

export default CadastroProduto;
