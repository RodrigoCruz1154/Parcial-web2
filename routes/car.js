var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/inicio',function(req,res,next){
  res.send('Lol')
});

module.exports = router;
