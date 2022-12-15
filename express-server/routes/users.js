var express = require('express');
var router = express.Router();

const userController = require('../Controller/userController');


router.get('/', function(req,res,next){
  res.send('user router');
});

router.post('/login', userController.signin);
router.post('/signup', userController.signup);
router.get('/findpw/:username', userController.findpw);
router.get('/finduser/:email', userController.finduser);

module.exports = router;