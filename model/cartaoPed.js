//Model para salvar Cartao no sistema de Pedido do BD
var mongoose = require('mongoose'); 

//Esquema ou Schema do Cartao do Cliente no Pedido dentro do BD
const Cartao = new mongoose.Schema(
    {
        num: String,
        nome: String,
        data: String,
        cvc: String,
    }
);

module.exports = mongoose.model('Cartao', Cartao);