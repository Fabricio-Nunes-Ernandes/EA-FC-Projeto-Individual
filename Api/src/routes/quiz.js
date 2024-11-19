

var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");


router.post("/registrarTentativa", function (req, res) {
    quizController.registrarTentativa(req, res);
});


module.exports = router;
