

var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.get("/pontos-por-genero", dashboardController.obterPontosPorGenero);
router.get("/dados-usuario", dashboardController.obterDadosUsuario);

module.exports = router;