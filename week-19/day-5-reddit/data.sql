CREATE DATABASE IF NOT EXISTS reddit;
USE reddit;

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT,
    title VARCHAR(120),
    url VARCHAR(256),
    timestamp BIGINT,
    score INT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    user_name VARCHAR(120),
    post_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO posts (title, url, timestamp)
VALUES 
('Hello World!', 'https://www.valami.hu/valami', 1254879),
('My Post', 'https://www.valami.hu/mas', 4589652),
('My life as a coder', 'https://www.valami.hu/ize', 9875412),
('Decorate your room', 'https://www.valami.hu/design', 91258746);

INSERT INTO users (user_name, post_id)
VALUES 
('Amy', 1),
('Bob', 2),
('Cys', 3);
