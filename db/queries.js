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
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Here are all the users'
    });
  })
  .catch(function(err){
    return next(err);
  });
};

module.exports = {
  getAllUsers: getAllUsers
}
