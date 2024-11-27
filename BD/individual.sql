create database EAFC;
use EAFC;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(60),
celular char(11),
senha varchar(45)
);

create table tentativa(
idTentativa int primary key auto_increment,
titulo varchar(60),
resposta varchar(45),
pontos int,
genero varchar(9),
fkUsuario int,
constraint fkUsurioTentativa foreign key (fkUsuario) references usuario(idUsuario),
tentativaAtual int
);

drop database EAFC;
select * from usuario;
select * from tentativa;






desc tentativa;

select nome ,tentativaAtual, sum(pontos) from tentativa join usuario on fkUsuario = idUsuario group by pontos order by sum(pontos);

delete from tentativa where idTentativa in (2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

select usuario.nome, tentativa.tentativaAtual, SUM(tentativa.pontos) AS total_pontos FROM tentativa JOIN usuario ON tentativa.fkUsuario = usuario.idUsuario GROUP BY usuario.nome, 
tentativa.tentativaAtual ORDER BY total_pontos DESC;

select usuario.nome, tentativa.tentativaAtual, SUM(tentativa.pontos) AS total_pontos, genero FROM tentativa JOIN usuario ON tentativa.fkUsuario = usuario.idUsuario 
where genero = "feminino" GROUP BY usuario.nome, tentativa.tentativaAtual ;

SELECT MAX(tentativaAtual) AS ultimaTentativa
FROM tentativa
WHERE fkUsuario = 8;


select SUM(pontos) from tentativa where genero = "feminino";

select SUM(pontos) from tentativa where genero = "masculino";



select SUM(pontos), genero from tentativa group by genero;

select nome , sum(pontos), max(TentativaAtual) from tentativa join usuario on idUsuario = fkUsuario where genero = "masculino" and nome = NOME_USARIO group by nome;
select nome , sum(pontos), max(TentativaAtual) from tentativa join usuario on idUsuario = fkUsuario where genero = "feminino" and nome = NOME_USARIO group by nome;

SELECT 
            nome,
            SUM(pontos) AS pontos_totais,
            MAX(TentativaAtual) AS tentativa_maxima,
            genero
        FROM tentativa
        JOIN usuario ON idUsuario = fkUsuario
        WHERE nome = '3'
        GROUP BY genero,nome;