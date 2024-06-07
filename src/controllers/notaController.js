
var notaModel = require("../models/notaModel");

// res.json({
//     acertos: resultadoAutenticar[0].acertosEscala,
//     erros: resultadoAutenticar[0].errosEscala,
//     fk: resultadoAutenticar[0].fkUsuario,
  
// })

function listar(req, res) {
    notaModel.listar().then(function(resultado){
        console.log('estou aqui');
        res.json({
            primeiroLugar: resultado[0].nome_usuario,
            segundoLugar: resultado[1].nome_usuario,
            primeiroLugarPt: resultado[0].total_pontos,
            segundoLugarPt: resultado[1].total_pontos,
            terceiroLugarPt: resultado[2].total_pontos,
            terceiroLugar: resultado[2].nome_usuario
       
        })

        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        // res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
        console.log('erro')
    })
}
function mynotes(req, res) {
    var id = req.body.idServer;

    notaModel.mynotes(id).then(function(resultado){
        console.log('estou aqui');
        res.json({
            seusAcertos: resultado[0].total_pontos,
            seusErros: resultado[0].total_erros_escalas,
     
       
        })

        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        // res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
        console.log('erro')
    })
}
function mynoteserro(req, res) {
    var id = req.body.idServer;

    notaModel.mynoteserro(id).then(function(resultado){
        console.log('estou aqui');
        res.json({
            um: resultado[0].coluna,
            umN: resultado[0].total_ocorrencias,
            dois: resultado[1].coluna,
            doisN: resultado[1].total_ocorrencias,
            tres: resultado[2].coluna,
            tresN: resultado[2].total_ocorrencias,
            quatro: resultado[3].coluna,
            quatroN: resultado[3].total_ocorrencias,
            cinco: resultado[4].coluna,
            cincoN: resultado[4].total_ocorrencias,
     
       
        })

    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);

    })
}
function mynotesacertos(req, res) {
    var id = req.body.idServer;

    notaModel.mynotesacertos(id).then(function(resultado){
        console.log('estou aqui');
        res.json({
            um: resultado[0].coluna,
            umN: resultado[0].total_ocorrencias,
            dois: resultado[1].coluna,
            doisN: resultado[1].total_ocorrencias,
            tres: resultado[2].coluna,
            tresN: resultado[2].total_ocorrencias,
            quatro: resultado[3].coluna,
            quatroN: resultado[3].total_ocorrencias,
            cinco: resultado[4].coluna,
            cincoN: resultado[4].total_ocorrencias,
     
       
        })


    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
  
    })
}

function cadastrar(req, res) {
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var id = req.body.idServer;
    var dos = req.body.do;
    var re = req.body.re;
    var mi = req.body.mi;
    var fa = req.body.fa;
    var sol = req.body.sol;
    var la = req.body.la;
    var si = req.body.si;
    var doSus = req.body.doSus;
    var reSus = req.body.reSus;
    var faSus = req.body.faSus;
    var solSus = req.body.solSus;
    var laSus = req.body.laSus;
    var edo = req.body.edo;
    var ere = req.body.ere;
    var emi = req.body.emi;
    var efa = req.body.efa;
    var esol = req.body.esol;
    var ela = req.body.ela;
    var esi = req.body.esi;
    var edoSus = req.body.edoSus;
    var ereSus = req.body.ereSus;
    var efaSus = req.body.efaSus;
    var esolSus = req.body.esolSus;
    var elaSus = req.body.elaSus;

    if (acertos == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    }
    if (id == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    }

    notaModel.cadastrar(id, erros, dos, re, mi, fa, sol, la, si, doSus, reSus, faSus, solSus, laSus, edo, ere, emi, efa, esol, ela, esi, edoSus, ereSus, efaSus, esolSus, elaSus, acertos).then(function(resposta){
        res.status(200).send("nota criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar,
    mynotes,
    mynoteserro,
    mynotesacertos
}