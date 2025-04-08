const express = require('express');
const { emitirNotaFiscal } = require('../controllers/nfController');
const router = express.Router();

router.post('/emitir', emitirNotaFiscal);

module.exports = router;