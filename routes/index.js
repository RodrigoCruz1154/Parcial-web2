var express = require('express');
var router = express.Router();
var CarController = require('../controllers/CarController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('');
});

router.post('/', function(req,res,next){
  res.render('index.ejs');
})

module.exports = router;
