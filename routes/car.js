var express = require('express');
var router = express.Router();
var CarControllers = require('../controllers/CarController');

/* GET users listing. */
router.get('/', CarControllers.mostrar);

router.put('/:id',CarControllers.modificar);

router.post('/',CarControllers.registrar);

router.delete('/',CarControllers.borrar);
module.exports = router;
