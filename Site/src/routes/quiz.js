const express = require("express");
const router = express.Router();
const quizModel = require("../models/quizModel");
var quizController = require("../controllers/quizController");

router.post("/registrarTentativa", function (req, res) {
    quizController.registrarTentativa(req, res);
});


router.get("/obterUltimaTentativa/:fkUsuario", (req, res) => {
    const fkUsuario = req.params.fkUsuario;

    quizModel.obterUltimaTentativa(fkUsuario)
    .then((resultado) => {
        const ultimaTentativa = (resultado[0]?.ultimaTentativa || 0) + 1;
        res.json({ ultimaTentativa });
    })
    .catch((erro) => {
        console.error("Erro ao obter última tentativa:", erro);
        res.status(500).json({ error: "Erro ao recuperar a última tentativa." });
    });
});

module.exports = router;
