// Create a backend for the Movie Selector form.
// Create a genres database table.
// Create a movies database table that has a foreign key to the genres table.
//...
const express = require('express');
const mysql = require('mysql2');

const port = 3000;
const app = express();

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angie',
    database: 'movie_selector',
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

// Create a GET / endpoint that serves the Movie Selector frontend.
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

// Create a GET /api/genres endpoint that returns the genres in JSON format.
app.get('/api/genres', (req, res) => {
    pool.query('SELECT * FROM genres;', (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send(rows);
    });
});
// Create a GET /api/movies endpoint that returns all movies.
// Add a genre filter to the GET /api/movies endpoint.
app.get('/api/movies', (req, res) => {
    const params = req.query.genre || '%';
    const query1 = 'SELECT * FROM movies;'
    const query2 = `SELECT title FROM movies 
    JOIN genres ON movies.genre_id = genres.id 
    WHERE genre LIKE ?;`;
    
    if (!params) {
        pool.query(query1, (err, rows) => {
            if (err) {
                console.error(`Cannot retrieve data: ${err.toString()}`);
                res.sendStatus(500);
                return null;
            }
            res.send(rows);
        });
    }
    pool.query(query2, params, (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send(rows);
    });
});

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));