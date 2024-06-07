create database musicalLogic;

use musicalLogic;

create table usuario (
idUser int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(25),
backgroundColor varchar(25)
);
select * from usuario;
create table pontos (
idPonto int primary key auto_increment,
fkUsuario int,
acertosEscalas int,
errosEscalas int,
acertosNotas int,
errosNotas int,
errosDo int,
errosRe int,
errosMi int,
errosFa int,
errosSol int,
errosLa int,
errosSi int,
errosDoSus int,
errosReSus int,
errosFaSus int,
errosSolSus int,
errosLaSus int,
Dos int,
Re int,
Mi int,
Fa int,
Sol int,
La int,
Si int,
DoSus int,
ReSus int,
FaSus int,
SolSus int,
LaSus int,
foreign key(fkUsuario) references usuario(idUser)
);




SELECT u.nome AS nome_usuario, SUM(p.acertosEscalas) AS total_pontos
FROM usuario u
JOIN pontos p ON u.idUser = p.fkUsuario
GROUP BY u.idUser
ORDER BY total_pontos DESC
LIMIT 3;

SELECT  nome, round(sum(acertosEscalas),2) as média FROM pontos
	JOIN usuario ON idUser = fkUsuario 
    group by nome;
SELECT nome, acertosEscalas FROM usuario JOIN pontos
	ON idUser = fkUsuario
    WHERE acertosEscalas = (SELECT max(acertosEscalas) FROM pontos);


select * from pontos;

SELECT 
    u.nome AS nome_usuario, 
    SUM(
        p.acertosEscalas
    ) AS total_pontos,
    SUM(p.errosEscalas) AS total_erros_escalas
FROM 
    usuario u
JOIN 
    pontos p ON u.idUser = p.fkUsuario
GROUP BY 
    u.idUser
ORDER BY 
    total_pontos DESC
LIMIT 1;

SELECT u.nome AS nome_usuario, SUM(p.acertosEscalas) AS total_pontos, SUM(p.errosEscalas) AS total_erros_escalas
FROM usuario u
JOIN pontos p ON u.idUser = p.fkUsuario
WHERE u.idUser = 1
GROUP BY u.idUser
LIMIT 1;

