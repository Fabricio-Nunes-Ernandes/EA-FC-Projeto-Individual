-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database EAFC;
use EAFC;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(60),
telefone char(11),
senha varchar(45)
);

create table tentativa(
idTentativa int primary key auto_increment,
titulo varchar(60),
resposta tinyint,
pontos int,
genero varchar(8),
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