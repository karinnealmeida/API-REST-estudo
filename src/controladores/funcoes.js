const pitty = require('../banco-de-dados')

const listarAlbuns = (req, res) => {
    return res.json(pitty)
};

const obterAlbum = (req, res) => {
    const { id } = req.params;

    const album = pitty.albuns.find((album) => {
        return album.id === Number(id)
    });

    if (!album) {
        return res.status(404).json("Album não encontrado.")
    };

    return res.status(200).json(album)
}

module.exports = {
    listarAlbuns,
    obterAlbum
}