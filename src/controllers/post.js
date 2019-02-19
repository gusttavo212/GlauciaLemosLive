/**
 * Arquivo: src/controllers/post.js
 * Author: Gustavo Alexandre
 * Description: Resposavel por tratas a lógica das rotas da api Post
 * Data: 19/02/2019
 */
// const _ = require('lodash');
const Post = require('../models/post');

function createPost(req, res) {
  const newPost = new Post(req.body);

  newPost.save((error, post) => {
    if (error) {
      res.status(400).json({ error: 'Error!' }, error);
    } else {
      res.status(200).json({ message: 'Post Adicionado com Sucesso!' }, post);
    }
  });
}

function findAll(req, res) {
  const query = Post.find({});

  query.exec((error, posts) => {
    if (error) {
      res.status(400).json(error);
    }

    res.status(200).json(posts);
  });
}

module.exports = {
  findAll,
  findOne,
  createPost,
  updateOne,
  deleteOne,
};
