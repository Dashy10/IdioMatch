var express = require('express');
var router = express.Router();
var cors = require('cors');

var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/matches', db.getAllUsers);


router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Express'});
});

// api routes
module.exports = router;
