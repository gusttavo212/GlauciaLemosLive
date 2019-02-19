/**
  * Arquivo: src/routes/routes.js
  * Author: Gustavo Alexandre
  * Description: Este arquivo é responsavel pelas rotas da aplicação.
  * Data: 19/02/2019
*/

const express = require('express');
const router = express.Router();
const posts = require('../controllers/post');

// GET: http://localhost:8000/v1/posts/
router.get('/posts/', posts.findAll);

// GET: http://localhost:8000/v1/posts/:id
router.get('/posts/:id', posts.findOne);

// POST: http://localhost:8000/v1/posts
router.post('/posts', posts.createPost);

// PUT: http://localhost:8000/v1/posts/:id
router.put('/posts/:id', posts.updateOne);

// DELETE: http://localhost:8000/v1/posts/:id
router.delete('/posts/:id', posts.deleteOne);
