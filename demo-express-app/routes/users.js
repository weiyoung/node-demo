var express = require('express');
var router = express.Router();

var users = [
  {
    "username": "dgipps",
    "first_name": "Daniel",
    "last_name": "Gipps"
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/',  function(req, res, next) {
  const newUser = req.body;

  users.push(newUser);

  res.send(newUser);
});

module.exports = router;
