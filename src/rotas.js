const express = require('express');
const {
    listarAlbuns,
    obterAlbum,
    cadastrarAlbum,
    atualizarAlbum,
    atualizarAno,
    excluirALbum
} = require('./controladores/funcoes');

const rotas = express();

rotas.get('/', (req, res) => {
    return res.json('O importante é ser você!')
});

rotas.get('/discografia', listarAlbuns);
rotas.get('/discografia/:id', obterAlbum);
rotas.post('/discografia', cadastrarAlbum);
rotas.put('/discografia/:id', atualizarAlbum);
rotas.patch('/discografia/:id/ano', atualizarAno);
rotas.delete('/discografia/:id', excluirALbum)

module.exports = rotas;