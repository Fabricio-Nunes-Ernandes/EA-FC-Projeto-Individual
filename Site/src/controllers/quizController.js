var quizModel = require("../models/quizModel");

function registrarTentativa(req, res) {
    console.log("Dados recebidos no body:", req.body);
    var titulo = req.body.tituloServer;
    var resposta = req.body.respostaServer;
    var pontos = req.body.pontosServer;
    var genero = req.body.generoServer;
    var fkUsuario = req.body.fkUsuarioServer;

 

    let tentativaAtual = req.body.TentativaServer || 1;

    quizModel
        .registrarTentativa(titulo, resposta, pontos, genero, fkUsuario, tentativaAtual)
        .then((resultado) => {
            console.log("Tentativa registrada com sucesso:", resultado);
            res.json({ message: "Tentativa registrada com sucesso!", resultado });
        })
        .catch((erro) => {
            console.error("Erro ao registrar tentativa:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrarTentativa,
};
