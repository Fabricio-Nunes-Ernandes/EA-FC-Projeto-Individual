var modelo = require("../models/dashboardModel");

function obterPontosPorGenero(req, res) {
    modelo.buscarPontosPorGenero()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.json(resultado[0]); 
            } else {
                res.status(404).send("Nenhum dado encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao obter pontos por gênero:", erro);
            res.status(500).send("Erro ao buscar dados.");
        });
}

function obterDadosUsuario(req, res) {
    const nomeUsuario = req.query.nome; 
    if (!nomeUsuario) {
        res.status(400).send("Nome de usuário não fornecido.");
        return;
    }

    modelo.buscarDadosUsuario(nomeUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                res.json({
                    lista: resultado
                }); 
            } else {
                res.json({
                    lista: resultado
                })
                
            }
        })
        .catch((erro) => {
            console.error("Erro ao obter dados do usuário:", erro);
            res.status(500).send("Erro ao buscar dados do usuário.");
        });
}

module.exports = {
    obterPontosPorGenero,
    obterDadosUsuario
};
