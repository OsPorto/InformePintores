const express = require('express');
//Vamos a routear a los pintores
let pintor = require('../controlers/pintoresController');

//creamos nuestras rutas
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;