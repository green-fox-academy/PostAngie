CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    firs_name varchar(120),
    last_name varchar(120),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT,
    name  TEXT(240) NOT NULL,
    priority INT,
    date date,
    user_id INT,
    is_done BOOLEAN DEFAULT false,
    is_deleted BOOLEAN DEFAULT false,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO tasks (name, priority, date)
VALUES
('walk the dog', 3, '2022-1-22'),
('buy milk', 1, '2022-1-22'),
('make coffee', 1, '2022-2-13'),
('do homework', 3, '2022-3-1'),
('visit yoga course', 2, '2022-1-20');

INSERT INTO users (firs_name, last_name)
VALUES
('Lara', 'Tower'),
('Norah', 'Jones'),
('Petal', 'Cosmicfreak'),
('Summer', 'Astral');


