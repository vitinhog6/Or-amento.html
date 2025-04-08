const express = require('express');
const { calcularOrcamento } = require('../controllers/orcamentoController');
const router = express.Router();

router.post('/', calcularOrcamento);

module.exports = router;