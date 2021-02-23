//Model para salvar Produto no sistema de BD
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

//Esquema ou Schema do Product dentro do BD
var ProductSchema = Schema({
    codigo: String,
    nome: String,
    categoria: String,
    descricao: String,
    peso: Number,
    quantidade: Number,
    preco: Number
    
});

module.exports = mongoose.model('Products', ProductSchema);

