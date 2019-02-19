/**
 * Arquivo: src/models/post.js
 * Author: Gustavo Alexandre
 * Description: Arquivo responsavel pelo modelo: 'Post' para realizar conexão com o bd.
 * Data: 16/02/2019
 */

/**
 * Infos Inerentes a Classe:
 * ==== Post ====
 * id: number(Gerado pelo MongoDB - GUID)
 * titulo: string
 * nome: string
 * email: string
 * conteudo: string
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    titulo: { type: String, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    conteudo: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

// Exportando o schema
module.exports = mongoose.model('post', PostSchema);
