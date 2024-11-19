var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        return res.status(400).send("Seu email está undefined!");
    }
    if (senha == undefined) {
        return res.status(400).send("Sua senha está indefinida!");
    }

    usuarioModel.autenticar(email, senha)
        .then(function (resultadoAutenticar) {
            if (resultadoAutenticar.length === 1) {
                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    nome: resultadoAutenticar[0].nome,
                    celular: resultadoAutenticar[0].celular,
                    email: resultadoAutenticar[0].email,
                    senha: resultadoAutenticar[0].senha
                });
            } else if (resultadoAutenticar.length === 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        })
        .catch(function (err) {
            console.error("Erro ao autenticar:", err);
            res.status(500).send("Erro interno no servidor.");
        });
}

module.exports = {
    autenticar
};
