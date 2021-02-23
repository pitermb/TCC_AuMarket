//Model para salvar User no sistema de BD
var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

//Esquema ou Schema do User dentro do BD
var UserSchema = Schema({
    cpf: String,
    nome: String, 
    telefone: String,
    email: String,
    senha: String,
    cep: String,
    uf: String,
    localidade: String,
    bairro: String,
    logradouro: String,
    numero: String,
    complemento: String
});

module.exports = mongoose.model('Users', UserSchema);