let { albuns, idAlbum } = require('../banco-de-dados');

const listarAlbuns = (req, res) => {
    return res.status(200).json(albuns);
}

const obterAlbum = (req, res) => {
    const { id } = req.params;

    const album = albuns.find((album) => {
        return album.id === Number(id)
    });

    if (!album) {
        return res.status(404).json("Album não encontrado.")
    };

    return res.status(200).json(album)
};

const cadastrarAlbum = (req, res) => {
    const { nome, ano } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "Por favor, informe o nome do álbum." })
    };

    if (!ano) {
        return res.status(400).json({ mensagem: "Por favor, informe o ano do álbum." })
    };

    const novoAlbum = {
        id: idAlbum++,
        nome,
        ano
    }
    albuns.push(novoAlbum);

    res.status(201).json(novoAlbum);
};

const atualizarAlbum = (req, res) => {
    const { id } = req.params;
    const { nome, ano } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "Por favor, informe o nome do álbum." })
    };

    if (!ano) {
        return res.status(400).json({ mensagem: "Por favor, informe o ano do álbum." })
    };

    const album = albuns.find((album) => {
        return album.id === Number(id)
    });

    if (!album) {
        return res.status(404).json({ mensagem: "Album não encontrado." })
    }

    album.nome = nome;
    album.ano = ano;

    return res.status(204).send();

};

const atualizarAno = (req, res) => {

    const { id } = req.params;
    const { ano } = req.body;

    const album = albuns.find((album) => {
        return album.id === Number(id);
    })

    if (!album) {
        return res.status(404).json({ mensagem: "Album não encontrado." });
    }

    album.ano = ano;

    return res.status(204).send();

}

const excluirALbum = (req, res) => {
    const { id } = req.params;

    const album = albuns.find((album) => {
        return album.id === Number(id);
    })

    if (!album) {
        return res.status(404).json({ mensagem: "Album não encontrado." });
    }

    albuns = albuns.filter()
}

module.exports = {
    listarAlbuns,
    obterAlbum,
    cadastrarAlbum,
    atualizarAlbum,
    atualizarAno
}