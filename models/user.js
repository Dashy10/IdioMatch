const db = require('../db/config');

const User = {};


User.findByUserName = userName => {
  return db.oneOrNone('SELECT * FROM users WHERE username = $1', [userName]);
};

User.create = user => {
 return db.one(
    `
      INSERT INTO users
      (username, password, email, main, learning, skype, whatsapp)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    `,
    [user.username, user.password, user.email, user.main, user.learning, user.skype, user.whatsapp]
  )
};

module.exports = User;
