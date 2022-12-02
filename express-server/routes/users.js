var express = require('express');
var router = express.Router();

const userController = require('../Controller/userController');


router.get('/', function(req,res,next){
  res.send('user router');
});

router.post('/login', userController.signin);
router.post('/signup', userController.signup);

module.exports = router;