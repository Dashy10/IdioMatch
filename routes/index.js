var express = require('express');
var router = express.Router();
var cors = require('cors');

var db = require('../db/queries');
var dba = require('../db/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express', user: req.user});
});

// get matches route
router.get('/matches', db.getAllUsers);

// get register routes
router.get('/register', function(req, res, next) {
  res.render('register', {title: 'Express', user: req.user});
});

// Passing data to the profile route
router.get('/profile',function(req, res, next) {
  dba.any('SELECT * FROM users')
  .then(function(data){
    res.render('profile', {title: 'Express', user: req.user, data:data});
    console.log('this is req.user ====>',req.user.learning);

  })
});

router.get('/api/users/:main', db.getUserbyMainLanguage);


// api routes
module.exports = router;
