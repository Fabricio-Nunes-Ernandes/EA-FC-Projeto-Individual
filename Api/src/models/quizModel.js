

var database = require("../database/config");

function registrarTentativa(titulo, resposta, pontos, genero, fkUsuario) {
    console.log(
        "ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():",
        titulo,
        resposta,
        pontos,
        genero,
        fkUsuario
    );

    var instrucaoSql = `
        INSERT INTO tentativa (titulo, resposta, pontos, genero, fkUsuario) 
        VALUES ('${titulo}', ${resposta}, ${pontos}, '${genero}', ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarTentativa
};
