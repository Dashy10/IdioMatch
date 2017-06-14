DROP DATABASE IF EXISTS idiomatch_db;
CREATE DATABASE idiomatch_db;

\c idiomatch_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  email VARCHAR(255),
  main TEXT NOT NULL,
  learning TEXT NOT NULL,
  skype VARCHAR(255),
  whatsapp VARCHAR(12),
  pic TEXT,
  location TEXT
);
