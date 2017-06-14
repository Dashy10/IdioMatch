const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');


authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('login');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('register', {title:'Express'});
});

authRouter.post('/register', (req, res, next)  => {
  authHelpers.createNewUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);

      res.json({profile:req.user});
    });
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});


authRouter.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('login');
});

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: 'login',
    failureFlash: true
  })
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
