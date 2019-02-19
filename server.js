/**
 * Arquivo: server.js
 * Author: Gustavo Alexandre
 * Description: Arquivo principal por executar a API.
 * Data: 12/02/2019
 */

const express = require('express');

const app = express();
const mongoose = require('mongoose');
// const morgan = require('morgan');
const bodyParse = require('body-parser');

const port = process.env.PORT || 8000;
const configDb = require('./src/config/database');

// Chamada da string de conexão do mongoose
mongoose.connect(configDb.url, { useNewUrlParser: true });

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.text());
app.use(bodyParse.json({ type: 'application/json' }));

app.get('/v1', (req, res) => res.json({ message: 'Sejam Bem-Vindos(as) a API: Live Coding' }));

app.listen(port);
console.log(`Aplicação executando na porta...${port}`);

module.exports = app;
