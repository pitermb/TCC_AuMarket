//Model para salvar Produto no sistema de Pedido do BD
var mongoose = require('mongoose'); 

//Esquema ou Schema do Produto dentro do BD
const Produto = new mongoose.Schema(
    {
        _id: String,
        nome: String,
        peso: Number,
        preco: Number,
    }
);

module.exports = mongoose.model('Produto', Produto);