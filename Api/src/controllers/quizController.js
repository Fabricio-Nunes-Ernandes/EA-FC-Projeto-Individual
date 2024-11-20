

var quizModel = require("../models/quizModel");

function registrarTentativa(req, res) {
    var titulo = req.body.tituloServer;
    var resposta = req.body.respostaServer;
    var pontos = req.body.pontosServer;
    var genero = req.body.generoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var tentativaAtual = req.body.TentativaServer;

   
    if (titulo == undefined) {
        res.status(400).send("O título está undefined!");
    } else if (resposta == undefined) {
        res.status(400).send("A resposta está undefined!");
    } else if (pontos == undefined) {
        res.status(400).send("Os pontos estão undefined!");
    } else if (genero == undefined) {
        res.status(400).send("O gênero está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O ID do usuário (fkUsuario) está undefined!");
    }
      else if (tentativaAtual == undefined) {
      res.status(400).send("O ID da tentativa (tentativa_Atual) está undefined!");
    } else {
      
        quizModel
            .registrarTentativa(titulo, resposta, pontos, genero, fkUsuario, tentativaAtual)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("\nHouve um erro ao registrar a tentativa! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
module.exports = {
    registrarTentativa
    
};
