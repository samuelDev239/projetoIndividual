var express = require("express");
var router = express.Router();

var notaController = require("../controllers/notaController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    notaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    notaController.listar(req, res);
});
router.post("/mynotes", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    notaController.mynotes(req, res);
});
router.post("/mynoteserro", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    notaController.mynoteserro(req, res);
});
router.post("/mynotesacertos", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    notaController.mynotesacertos(req, res);
});

module.exports = router;