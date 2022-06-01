const express = require('express');
const mysql = require('mysql2');
// const path = require('path');

const port = 3000;
const app = express();

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angie',
    database: 'foxplayer',
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
app.use(express.static('public'));


app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));