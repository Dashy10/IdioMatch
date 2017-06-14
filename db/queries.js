var db = require('../db/config');


getAllUsers = (req,res,next) => {
  db.any('SELECT * FROM users')
  .then(function(data){
    res.render('matches', {title:"Express", data: data})
    console.log((data[0].username));
  });
};

module.exports = {
  getAllUsers: getAllUsers
}
