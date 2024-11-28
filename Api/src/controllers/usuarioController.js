var usuarioModel = require("../models/usuarioModel");


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
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
            
          
            if (resultadoAutenticar.length === 1) {
                console.log(resultadoAutenticar);
             
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


function cadastrar(req, res) {
 
    var nome = req.body.nomeServer;
    var celular = req.body.celularServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    


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