const express = require('express');
const userRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
var db = require('../db/queries');

/* GET users listing. */

userRoutes.get('/', authHelpers.loginRequired,(req, res) => {
  res.locals.userInfo = req.user;
  res.render( 'users', {userInfo: req.user} );
});

module.exports = userRoutes;
