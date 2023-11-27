const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');
const tasasRoutes = require('./tasas');
const localidadesRoutes = require('./localidades');

router.use('/users', usersRoutes);
router.use('/tasas', tasasRoutes);
router.use('/localidades', localidadesRoutes);

module.exports = router;