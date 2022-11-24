var express = require('express');
var router = express.Router();
const uuid = require('uuid');

const User = require('../user');
const app = express();


// async function findUser(username, foundUser){
//   foundUser = User.findOne({username: })
// };


router.get('/login', (req, res) => {

  User.findOne({ username: req.body.username })
    .then(user => {
      console.log(user);
      if (user && user.password == req.body.password) {
        // foundUser.password == req.body.password
        res.status(200).json({
          message: "login successful",
          data: user
        })
      }
      res.status(400).json({
        message: "incorrect user credential",
        data: {}
      })
    })
    .catch(err => {console.log(err)});
});



router.post('/add-user', (req, res) => {
  const user = new User({
    id: uuid.v4(),
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  user.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    });
});

module.exports = router;
