/**
  * Arquivo: src/routes/routes.js
  * Author: Gustavo Alexandre
  * Description: Este arquivo é responsavel pelas rotas da aplicação.
  * Data: 19/02/2019
*/

const express = require('express');
const router = express.Router;
const posts = require('../controllers/post');

// Definir as rotas da nossa api: 'Post'
router.get('/posts/', posts.findAll);
router.get('/posts/:id', posts.findOne);
router.post('/posts/:id', posts.createPost);
router.put('/posts/:id', posts.updateOne);
router.delete('/posts/:id', posts.deleteOne);
