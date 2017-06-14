const express = require('express');
const userRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

/* GET users listing. */

userRoutes.get('/', authHelpers.loginRequired, (req, res) => {
  res.locals.userInfo = req.user;
  res.json({ user: 'user profile page placeholder', userInfo: req.user });
});

module.exports = userRoutes;
