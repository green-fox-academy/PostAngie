const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const port = 3000;
const app = express();

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angie',
    database: 'newsletter',
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

app.get('/list', (req, res) => {
    pool.query('SELECT * FROM users;', (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send({ data: rows });
    });
});

app.post('/signup', (req, res) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
        timestamp: Date.now()
    };
    if (!data.username) {
        res.status(400).send({ message: 'missing name' });
        return;
    }
    if (!data.email) {
        res.status(400).send({ message: 'missing e-mail' });
        return;
    }
    const query = `INSERT INTO users (full_name, email, timestamp)
    VALUES (?,?,?);`
    const params = [data.username, data.email, data.timestamp];
    pool.query(query, params, (err, result) => {
        if (err) {
            res.sendStatus(500).send('Database error');
            return;
        }
        res.status(201).json({
            id: result.insertId,
            ...data
        });
    });
});


app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));