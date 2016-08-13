DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS searches;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255)
);

CREATE TABLE searches (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  searchentry VARCHAR(255)
);
