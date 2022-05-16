CREATE DATABASE IF NOT EXISTS movie_selector;
USE movie_selector;

CREATE TABLE IF NOT EXISTS genres (
    id INT,
    genre VARCHAR(256),
    PRIMARY KEY (id)
);

INSERT INTO genres (id, genre)
VALUES 
(1, 'Sci-fi'),
(2, 'Drama'),
(3, 'Comedy');

CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT,
    title VARCHAR(256),
    genre_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);

INSERT INTO movies (title, genre_id)
VALUES
('Moon', 1),
('2001: A Space Odyssey', 1),
('Contact', 1),
('Darkest Hour', 2),
('There Will Be Blood', 2),
('American Beauty', 2),
('Airplane!', 3),
('Deadpool', 3),
("Wayne's World", 3);