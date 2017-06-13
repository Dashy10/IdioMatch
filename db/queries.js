var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connString = process.env.DATABASE_URL;
console.log(connString);
// connects to our database
var db = pgp(connString);


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
