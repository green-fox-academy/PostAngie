const express = require('express');
const mysql = require('mysql2');

const port = 3000;
const app = express();

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angie',
    database: 'reddit',
    debug: false,
});

pool.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connection established");
    }
});
app.use(express.json());
app.use(express.static('assets'));

app.get('/home', (req, res) => {
    const query = `SELECT posts.id, title, url, score, timestamp, user_name FROM posts
    LEFT JOIN users on users.post_id = posts.id;`
    pool.query(query, (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send({posts: rows});
    });
    //res.redirect('/main.html');
});

app.get('/posts', (req, res) => {
    pool.query('SELECT * FROM posts;', (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send({ posts: rows });
    });
});

app.post('/posts', (req, res) => {
    const data = {
        title: req.body.title,
        url: req.body.url,
        timestamp: Date.now()
    };
    if (!data.title) {
        res.status(400).send({ message: 'missing title' });
        return;
    }
    if (!data.url || !data.url.includes(':')) {
        res.status(400).send({ message: 'missing or invalid URL' });
        return;
    }
    const query = `INSERT INTO posts (title, url, timestamp)
    VALUES (?,?, ?);`
    const params = [data.title, data.url, data.timestamp];

    pool.query(query, params, (err, result) => {
        if (err) {
            res.sendStatus(500).send('Database error');
            return;
        }
        res.status(201).send({
            id: result.insertId,
            score: 0,
            ...data
        });
    });
});

app.put('/posts/:id/upvote', (req, res) => {
    vote(req, res, 'up');
});

app.put('/posts/:id/downvote', (req, res) => {
    vote(req, res, 'down');
});

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));

function vote(req, res, upOrdown) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).send({ message: 'Invalid id!' })
    }

    let operator = ''

    if (upOrdown === 'up') {
        operator = '+';
    } if (upOrdown === 'down') {
        operator = '-';
    }

    const query = `UPDATE posts
    SET score = score ${operator} 1
    WHERE id = ?`

    const params = [id];

    pool.query(query, params, (err1, rows1) => {
        if (err1) {
            res.sendStatus(500).send('Database error');
            return;
        }
        const query2 = `SELECT * FROM posts WHERE id = ?`

        pool.query(query2, params, (err2, rows2) => {
            if (err2) {
                res.sendStatus(500).send('Database error');
                return;
            }
            res.status(201).send(rows2[0]);
        });
    });
}

module.exports = { app, pool };