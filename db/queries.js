var db = require('../db/config');


getAllUsers = (req,res,next) => {
  db.any('SELECT * FROM users')
  .then(function(data){
    res.render('matches', {title:"Express", data: data})
    console.log((data[0].username));
  });
};

getAllUsersProfile = (req,res,next) => {
  db.any('SELECT * FROM users')
  .then(function(data){
    res.render('profile', {title:"Express", data: data})
    console.log((data[0].username));
  });
};

getUser = (req,res,next) => {
  var userId = parseInt(req.params.id)
  db.one('SELECT * FROM users WHERE id=$1', userId)
  .then(function(data){
    res.render('profile', {title:"Express", data: data})
  })
}

module.exports = {
  getAllUsers: getAllUsers,
  getAllUsersProfile: getAllUsersProfile
}
