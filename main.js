require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const cors = require("cors");
const portaServidor = process.env.PORTA_DO_SERVIDOR;
const urlBanco = process.env.URL_BANCO_DE_DADOS;

//Criando o servidor web:
const app = express();

//Configurando o servidor web:
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Conectando os controllers:
app.use("/filmes", require("./controllers/filme_controller"));

console.log("Conectando ao banco de dados...");

mongoose.connect(urlBanco).then(() => {
    console.log("Conectado com sucesso!")
    app.listen(parseInt(portaServidor), () => {
        console.log(`O servidor está no ar, acesse em: http://127.0.0.1:${portaServidor}`);
    })

});
