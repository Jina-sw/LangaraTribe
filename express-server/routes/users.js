var express = require('express');
var router = express.Router();

const userController = require('../Controller/userController');


router.get('/', function(req,res,next){
  res.send('user router');
});


router.get('/login', userController.signin);
router.get('/signup', userController.signup);

module.exports = router;
