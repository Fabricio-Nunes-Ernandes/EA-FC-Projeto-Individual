

var database = require("../database/config");

function registrarTentativa(titulo, resposta, pontos, genero, fkUsuario, tentativaAtual) {
    console.log(
        "ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():",
        titulo,
        resposta,
        pontos,
        genero,
        fkUsuario,
        tentativaAtual
    );

    var instrucaoSql = `
        INSERT INTO tentativa (titulo, resposta, pontos, genero, fkUsuario, tentativaAtual) 
        VALUES ('${titulo}', ${resposta}, ${pontos}, '${genero}', ${fkUsuario} , ${tentativaAtual});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterUltimaTentativa(fkUsuario) {
    var instrucaoSql = `
        SELECT MAX(tentativaAtual) AS ultimaTentativa
        FROM tentativa
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando SQL para obter a última tentativa: \n" + instrucaoSql);

    return database.executar(instrucaoSql); // Retorna o resultado da consulta SQL
}



module.exports = {
    registrarTentativa,
    obterUltimaTentativa, 
};