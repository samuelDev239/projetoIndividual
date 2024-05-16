create database musicalLogic;

use musicalLogic;

create table usuario (
idUser int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(25)
);

create table pontos (
idPonto int primary key auto_increment,
fkUsuario int,
acertosEscalas int,
errosEscalas int,
acertosNotas int,
errosNotas int,
foreign key(fkUsuario) references usuario(idUser)
);