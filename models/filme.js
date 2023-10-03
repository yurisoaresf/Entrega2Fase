const mongoose = require("mongoose");

const FilmeSchema = {
    titulo: String,
    preco: Number,
    foto: String  
}

module.exports = mongoose.model("Filme", FilmeSchema);