var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connString = process.env.DATABASE_URL;
console.log(connString);
// connects to our database
var db = pgp(connString);


module.exports = db;
