const express = require('express');
const { getAllLocalidades, searchByName } = require('../handlers/localidadesHandler');
const router = express.Router();

router.get('/search', searchByName);
router.get('/', getAllLocalidades);

module.exports = router;