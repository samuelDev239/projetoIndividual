var database = require("../database/config")

function mynotes(id) {
    var instrucao = `SELECT u.nome AS nome_usuario, SUM(p.acertosEscalas) AS total_pontos, SUM(p.errosEscalas) AS total_erros_escalas
    FROM usuario u
    JOIN pontos p ON u.idUser = p.fkUsuario
    WHERE u.idUser = ${id}
    GROUP BY u.idUser
    LIMIT 1; `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function mynoteserro(id) {
    var instrucao = `
    SELECT coluna, SUM(ocorrencias) AS total_ocorrencias
FROM (
    SELECT 'Dó' AS coluna, SUM(errosDo) AS ocorrencias FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Ré', SUM(errosRe) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Mí', SUM(errosMi) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Fá', SUM(errosFa) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Sol', SUM(errosSol) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Lá', SUM(errosLa) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Si', SUM(errosSi) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Dó #', SUM(errosDoSus) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Ré #', SUM(errosReSus) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Fá #', SUM(errosFaSus) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Sol #', SUM(errosSolSus) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Lá #', SUM(errosLaSus) FROM pontos WHERE fkUsuario = ${id}
) AS subquery
GROUP BY coluna
ORDER BY total_ocorrencias DESC
LIMIT 5;

    ; `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function mynotesacertos(id) {
    var instrucao = `
    SELECT coluna, SUM(ocorrencias) AS total_ocorrencias
FROM (
    SELECT 'Dó' AS coluna, SUM(Dos) AS ocorrencias FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Ré', SUM(Re) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Mí', SUM(Mi) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Fá', SUM(Fa) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Sol', SUM(Sol) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Lá', SUM(La) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Si', SUM(Si) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Dó #', SUM(DoSus) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Ré #', SUM(ReSus) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Fá #', SUM(FaSus) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Sol #', SUM(SolSus) FROM pontos WHERE fkUsuario = ${id}
    UNION ALL
    SELECT 'Lá #', SUM(LaSus) FROM pontos WHERE fkUsuario = ${id}
) AS subquery
GROUP BY coluna
ORDER BY total_ocorrencias DESC
LIMIT 5;

    ; `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    var instrucao = `SELECT u.nome AS nome_usuario, SUM( p.acertosEscalas ) AS total_pontos,
SUM(p.errosEscalas) AS total_erros_escalas FROM usuario u JOIN pontos p ON u.idUser = p.fkUsuario GROUP BY u.idUser ORDER BY total_pontos DESC LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(id, erros, dos, re, mi, fa, sol, la, si, doSus, reSus, faSus, solSus, laSus, edo, ere, emi, efa, esol, ela, esi, edoSus, ereSus, efaSus, esolSus, elaSus, acertos) {
    var instrucao = `
        INSERT INTO pontos (fkUsuario, acertosEscalas, errosEscalas, Dos, Re, Mi, Fa, Sol, La, Si, DoSus, ReSus, FaSus, SolSus, LaSus, errosDo, errosRe, errosMi, errosFa, errosSol, errosLa, errosSi, errosDoSus, errosReSus, errosFaSus, errosSolSus, errosLaSus) VALUES ('${id}','${acertos}','${erros}','${dos}','${re}','${mi}','${fa}','${sol}','${la}','${si}','${doSus}','${reSus}','${faSus}','${solSus}','${laSus}','${edo}','${ere}','${emi}','${efa}','${esol}','${ela}','${esi}','${edoSus}','${ereSus}','${efaSus}','${esolSus}','${elaSus}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    mynotes,
    mynoteserro,
    mynotesacertos
};