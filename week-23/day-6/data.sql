CREATE DATABASE IF NOT EXISTS newsletter;
USE newsletter;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    full_name VARCHAR(256),
    email VARCHAR(256),
    timestamp BIGINT,
    PRIMARY KEY (id)
);

INSERT INTO users (full_name, email, timestamp)
VALUES 
('Amy Tonder', 'amyt@gmail.com', 1651950125),
('Bob Vayne', 'boby@gmail.com', 1651950125),
('Victor Levander', 'vlevander@gmail.com', 1651950125);