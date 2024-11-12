var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Verificação se o email ou a senha estão indefinidos
    if (email == undefined) {
        return res.status(400).send("Seu email está undefined!");
    } 
    if (senha == undefined) {
        return res.status(400).send("Sua senha está indefinida!");
    }

    // Chama o model para autenticação
    usuarioModel.autenticar(email, senha)
        .then(function (resultadoAutenticar) {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // Transforma JSON em String
            
            // Verifica se encontrou exatamente um usuário
            if (resultadoAutenticar.length === 1) {
                console.log(resultadoAutenticar);
                // Retorna os dados do usuário autenticado
                res.json({
                    idUsuario: resultadoAutenticar[0].idUsuario,
                    nome: resultadoAutenticar[0].nome,
                    celular: resultadoAutenticar[0].celular,
                    email: resultadoAutenticar[0].email,
                    senha: resultadoAutenticar[0].senha
                });
            } else if (resultadoAutenticar.length === 0) {
                // Caso não tenha encontrado nenhum usuário
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                // Caso tenha encontrado mais de um usuário com as mesmas credenciais
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        })
        .catch(function (err) {
            console.error("Erro ao autenticar:", err);
            res.status(500).send("Erro interno no servidor.");
        });
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var celular = req.body.celularServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }  else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    }
      else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, celular, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}