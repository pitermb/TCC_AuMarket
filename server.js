//Requires para inicializar o server
const express = require("express");
const bodyParser = require("body-parser");

//Chamada dos Models e seus Schemas
var User = require("./model/user");
var Product = require("./model/productsCad");
var Pedido = require("./model/pedido");
var Produto = require("./model/CarrinhoProdsPed");
var Cartao = require("./model/cartaoPed");

//Conectando no banco de dados
const mongoose = require("mongoose");

//Chamar função de enviar e-mail
const nodemailer = require("nodemailer");

//Conectando server ao MongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/aumarket", {
    useMongoClient: true,
  })
  .then(function () {
    console.log("MongoDB Conectado...");
  })
  .catch(function (err) {
    console.log("Erro ao conectar ao DB: " + err);
  });

//Gerando a Porta de saida do server
const app = express();
const port = process.env.PORT || 5000;

//Body Parser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Rotas do CRUD PROJETO ------------------------------------------------------------------------------
/*****************************************************************
      Salva novo Product
******************************************************************/
app.post("/api/product", function (req, resp) {
  var product = new Product();

  product.codigo = req.body.cad_CodProduto;
  product.nome = req.body.cad_NomeProduto;
  product.categoria = req.body.cad_CatProduto;
  product.descricao = req.body.cad_DescProduto;
  product.peso = req.body.cad_PesoProduto;
  product.quantidade = req.body.cad_QntEstoque;
  product.preco = req.body.cad_PrecoVenda;

  product.save()
    .then(function () {
      resp.json({
        message: "Produto cadastrado com sucesso!",
      });
    })
    .catch(function (error) {
      console.log(error);
      resp.send("Erro no DB...: " + error);
    });
});

/*****************************************************************
      Salva novo User
******************************************************************/
app.post("/api/user", function (req, resp) {
  var user = new User();

  user.cpf = req.body.cad_Cpf;
  user.nome = req.body.cad_Nome;
  user.telefone = req.body.cad_Tel;
  user.email = req.body.cad_Email;
  user.senha = req.body.cad_CriarSenha;
  user.cep = req.body.cad_Cep;
  user.uf = req.body.cad_Uf;
  user.localidade = req.body.cad_Cidade;
  user.bairro = req.body.cad_Bairro;
  user.logradouro = req.body.cad_Endereco;
  user.numero = req.body.cad_NumCasa;
  user.complemento = req.body.cad_CompCasa;

  user.save()
    .then(function () {
      resp.json({
        message: "Usuario cadastrado com sucesso!",
      });
    })
    .catch(function (error) {
      console.log(error);
      resp.send("Erro no DB...: " + error);
    });
});

/*****************************************************************
      Busca todos os Users Cadastrados ( VERIFICAR CPF CADASTRADO )
******************************************************************/
app.get("/api/user", function (req, resp) {
  User.find(function (error, users) {
    if (error) {
      resp.send("Erro no DB...: " + error);
    } else {
      resp.json(users);
    }
  });
});

/*****************************************************************
      Busca User por cpf ( PAGINA LOGIN )
******************************************************************/
app.get("/api/user/cpf/:cpf", function (req, resp) {
  User.find({
      cpf: req.params.cpf,
    },
    function (error, cpf) {
      if (error) {
        resp.send("Erro do DB...: " + error);
      } else {
        resp.json(cpf);
      }
    }
  );
});

/*****************************************************************
      Envio de e-mail
******************************************************************/
app.get("/api/email:email", function (req, resp) {
  var email = req.params.email;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "au.market.entra21@gmail.com",
      pass: "92143276",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  transporter
    .sendMail({
      subject: "Finalização de Compra",
      from: "Au.market <au.market.entra21@gmail.com>",
      to: [email],
      html: `<h2>Obrigado por comprar com a gente!</h2> 
      <p>Seu pedido será computado após a confirmação do pagamento.</p> 
      <p>Em caso de erro, dúvidas ou reclamações. Nos contate via E-mail.</p>`,
    })
    .then((message) => {
      console.log({
        message: "Sucesso!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

/*****************************************************************
      Busca Product por categoria ( FILTRO )
******************************************************************/
app.get("/api/product/categoria/:categoria", function (req, resp) {
  Product.find({
      categoria: req.params.categoria,
    },
    function (error, categoria) {
      if (error) {
        resp.send("Erro do DB...: " + error);
      } else {
        resp.json(categoria);
      }
    }
  );
});

/*****************************************************************
      PUXA TODOS OS PRODUTOS CADASTRADOS ( PAGINA CAD_PRODUTOS )
******************************************************************/
app.get("/api/products", function (req, resp) {
  Product.find(function (error, products) {
    if (error) {
      console.log("Erro ao buscar todos os produtos: " + error);
      resp.send("Erro no DB...: " + error);
    } else {
      resp.json(products);
    }
  });
});

/*****************************************************************
      DELETA UM PRODUTO - Busca por _id ( PAGINA CAD_PRODUTO )
******************************************************************/
app.get("/api/product/:id", function (req, resp) {
  Product.deleteOne({
    _id: req.params.id,
  })
    .then(function (result) {
      resp.json({
        message: "Produto deletado com sucesso",
      });
    })
    .catch(function (err) {
      console.log("Erro no DB...: " + err);
      resp.send("Erro no DB...: " + error);
    });
});

/*****************************************************************
      CAPTURA UM PRODUTO  - Busca por _id ( PAGINA PRODUTOS )
******************************************************************/
app.get("/api/oneproduct/:id", function (req, resp) {
  Product.find({
    _id: req.params.id,
  })
    .then(function (result) {
      resp.json(result);
    })
    .catch(function (err) {
      console.log("Erro no DB...: " + err);
      resp.send("Erro no DB...: " + error);
    });
});

/*****************************************************************
      PESQUISA PRODUTO  - Busca por descrição ( PESQUISA HOME )
******************************************************************/
app.get('/api/product/descricao/:descricao', function (req, resp) {

 let descricao1 = req.params.descricao 

 Product.find({ descricao: new RegExp(descricao1,'i') }, function(error, descricao){
   
   if(error){
     resp.send('Erro do DB...: ' + error);
   }else{
     resp.json(descricao);
   }
 });

});

/*****************************************************************
      Salva novo Pedido ( CARRINHO PASSO 3 para 4 )
******************************************************************/
app.post("/api/pedido", function (req, resp) {
  var cartao = new Cartao();
  var produto = new Produto();
  var pedido = new Pedido();

  pedido.cliente = req.body.cliente;

  cartao.num = req.body.cartao.num;
  cartao.nome = req.body.cartao.nome;
  cartao.data = req.body.cartao.data;
  cartao.cvc = req.body.cartao.cvc;

  pedido.cartao = cartao;

  for (let i = 0; i < req.body.produtos.length; i++) {
    produto._id = req.body.produtos[i].id;
    produto.nome = req.body.produtos[i].nome;
    produto.peso = req.body.produtos[i].peso;
    produto.preco = req.body.produtos[i].preco;

    pedido.produtos.push(produto);
  }

  pedido.save()
    .then(function (_id) {
      resp.json(_id);
    })
    .catch(function (error) {
      console.log(error);
      resp.send("Erro no DB...: " + error);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
