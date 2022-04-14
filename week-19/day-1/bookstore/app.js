const express = require('express');
const mysql = require('mysql2');

const port = 3000;
const app = express();

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angie',
    database: 'bookinfo',
    debug: false,
});

pool.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connection established");
    }
});

app.use(express.static('public'));
app.use(express.json());

app.get('/api/', (req, res) => {
    pool.query('SELECT book_name FROM book_mast;', (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        return res.send(rows);
    });
});

app.get('/api/booklist', (req, res) => {

    pool.query(' SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast JOIN author on author.aut_id = book_mast.aut_id JOIN category on category.cate_id = book_mast.cate_id JOIN publisher on publisher.pub_id = book_mast.pub_id;', (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send({ book_mast: rows });
    });
});

app.get('/api/books', (req, res) => {
    const query = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
    FROM book_mast 
    JOIN author on author.aut_id = book_mast.aut_id 
    JOIN category on category.cate_id = book_mast.cate_id 
    JOIN publisher on publisher.pub_id = book_mast.pub_id;`

    pool.query(query, (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send({ book_mast: rows });
    });

    const params = [
        req.query.category || '%',
        req.query.publisher || '%',
    ];
});

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));