CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT,
    name  TEXT(240) NOT NULL,
    priority INT,
    date date
    is_done BOOLEAN DEFAULT false,
    is_deleted BOOLEAN DEFAULT false,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
)

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    firs_name varchar(120),
    last_name varchar(120),
    PRIMARY KEY (id)
)

INSERT INTO tasks (name, priority, date)
VALUES
(walk the dog, 3, 11-1-2022),
(buy milk, 1, 11-1-2022),
(make coffee, 1, 21-1-2022),
(do homework, 3, 11-1-2022),
(visit yoga course, 2, 10-1-2022);

INSERT INTO users (first_name, last_name)
VALUES
(Lara, Tower),
(Norah, Jones),
(Petal, Cosmicfreak),
(Summer, Astral);



