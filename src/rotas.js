const express = require('express');
const { listarAlbuns, obterAlbum } = require('./controladores/funcoes');

const rotas = express();

rotas.get('/', (req, res) => {
    return res.json('O importante é ser você!')
});

rotas.get('/discografia', listarAlbuns);
rotas.get('/discografia/:id', obterAlbum)

module.exports = rotas;