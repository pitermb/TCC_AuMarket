//Model para salvar Pedido no sistema de BD
var mongoose = require('mongoose'); 

//Esquema ou Schema do Cartao do Cliente dentro do BD
const cartao = new mongoose.Schema(
    {
        num: String,
        nome: String,
        data: String,
        cvc: String,
    }
);

//Esquema ou Schema do array de Produtos Comprados dentro do BD
const produto = new mongoose.Schema(
    {
        _id: String,
        nome: String,
        peso: Number,
        preco: Number,
    }
);

//Esquema ou Schema do Cliente Comprador e suas informações dentro do BD
var PedidosSchema = new mongoose.Schema({
    cliente: String,
    cartao: cartao,
    produtos: [produto]

});

module.exports = mongoose.model('Pedidos', PedidosSchema);