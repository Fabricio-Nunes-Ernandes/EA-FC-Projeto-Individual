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
constraint fkUsurioTentativa foreign key (fkUsuario) references usuario(idUsuario)
);

create table ranking(
idRanking int primary key auto_increment,
pontos_total int,
posicao int,
fkTentativa int,
constraint fkRankTentativa foreign key (fkTentativa) references tentativa (idTentativa)
);

select * from usuario;
select * from tentativa;


alter table tentativa modify column resposta varchar(45);
alter table tentativa modify column genero char(9);
alter table tentativa add column tentativa int;
ALTER TABLE tentativa RENAME Column tentativa_Atual TO tentativaAtual;

desc tentativa;

select sum(pontos) from tentativa join usuario on fkUsuario = idUsuario group by tentativaAtual order by sum(pontos) desc;




