const mongoose = require("mongoose");

const FilmeSchema = {
    titulo: String,
    genero: String,
    diretor: String,
    produtor: String,
    ano: Number,
    duracao: Number,
    distribuidora: String,
    bilheteria: Number,
    foto: String  
}

module.exports = mongoose.model("Filme", FilmeSchema);