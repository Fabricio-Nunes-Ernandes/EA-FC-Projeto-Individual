var database = require("../database/config");

function buscarPontosPorGenero() {
    var instrucaoSql = `
        SELECT 
            SUM(CASE WHEN genero = 'feminino' THEN pontos ELSE 0 END) AS pontos_femininos,
            SUM(CASE WHEN genero = 'masculino' THEN pontos ELSE 0 END) AS pontos_masculinos
        FROM tentativa;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosUsuario(nomeUsuario) {
   
        var instrucaoSql = `
            SELECT nome, SUM(pontos) AS pontos_totais, MAX(TentativaAtual) AS tentativa_maxima, genero
            FROM tentativa
            JOIN usuario ON usuario.idUsuario = tentativa.fkUsuario
            WHERE usuario.nome = '${nomeUsuario}'  -- Concatenando o valor diretamente
            GROUP BY genero , usuario.nome;
        `;
    
      
    
    return database.executar(instrucaoSql, [nomeUsuario]);
}

module.exports = {
    buscarPontosPorGenero,
    buscarDadosUsuario
};