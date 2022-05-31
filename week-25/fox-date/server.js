const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const { send } = require('process');

const port = 3000;
const app = express();

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angie',
    database: 'foxdating',
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
app.use(express.static('profiles'));


const today = new Date().getFullYear();

app.get('/', (req, res) => {
    res.sendFile('/index.html');
})

app.get('/profiles/:username', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/profiles/profile.html'))
})

app.get('/match/:username', (req, res) => {
    res.sendFile(path.join(__dirname + '/assets/matches/match.html'))
})

app.get('/api/users/:username', (req, res) => {
    const params = req.params.username;
    const query = `SELECT * FROM profiles WHERE username=?`;


    pool.query(query, params, (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        if (rows.length === 0) {
            res.status(404).send({ message: 'The user does not exist!' })
            return
        }
        res.send({
            "username": rows[0].username,
            "nickname": rows[0].nickname,
            "age": today - rows[0].birth_year,
            "my_gender": rows[0].my_gender,
            "target_gender": rows[0].target_gender,
            "about_me": rows[0].about_me,
            "picture": rows[0].picture
        });
    });
});

app.get('/api/random-user', (req, res) => {
    const activeUser = req.query.username;
    const query = `SELECT * FROM profiles WHERE username != ? 
    ORDER BY RAND() LIMIT 1`;
    const params = [activeUser];

    pool.query(query, params, (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
        }
        res.send({
            "username": rows[0].username,
            "nickname": rows[0].nickname,
            "age": today - Number(rows[0].birth_year),
            "my_gender": rows[0].my_gender,
            "target_gender": rows[0].target_gender,
            "about_me": rows[0].about_me,
            "picture": rows[0].picture
        });
    });
});

app.post('/api/users', (req, res) => {
    const data = {
        username: req.body.username,
        nickname: req.body.nickname,
        my_gender: req.body.my_gender,
        t_gender: req.body.t_gender,
        birth_year: Number(req.body.birth_year),
        picture: req.body.picture,
        about_me: req.body.about_me
    }

    if (!data.username) {
        res.status(400).send({ message: 'Missing username!' });
        return;
    }
    if (!data.nickname) {
        res.status(400).send({ message: 'Missing nickname!' });
        return;
    }
    if (!data.my_gender) {
        res.status(400).send({ message: 'Please choose your gender!' });
        return;
    }
    if (!data.t_gender) {
        res.status(400).send({ message: 'Please choose gender you are looking for!' });
        return;
    }
    if (!data.birth_year) {
        res.status(400).send({ message: 'Missing birth year!' });
        return;
    }
    if (!data.picture || !data.picture.includes(':')) {
        res.status(400).send({ message: 'Missing or invalid URL!' });
        return;
    }
    if (Number(data.birth_year) > (today - 18)) {
        res.status(400).send({ message: 'Sorry, you are too young to register!' });
        return;
    }
    const query1 = `SELECT * FROM profiles WHERE username = ?`
    const params1 = [req.body.username]

    pool.query(query1, params1, (err1, rows) => {
        if (err1) {
            console.error(`Cannot retrieve data: ${err1.toString()}`);
            res.sendStatus(500);
            return null;
        }

        if (rows.length > 0) {
            res.status(400).send({ message: 'The username is already in use!' })
            return
        }
        const query2 = `INSERT INTO profiles (username, nickname, my_gender, t_gender, birth_year, picture, about_me) 
            VALUES (?,?,?,?,?,?,?);`;

        const params2 = [data.username, data.nickname, data.my_gender, data.t_gender,
        data.birth_year, data.picture, data.about_me];

        pool.query(query2, params2, (err2, result) => {
            if (err2) {
                console.error(`Cannot retrieve data: ${err2.toString()}`);
                res.status(500).send(err2.sqlMessage);
                return;
            }
            res.status(201).send('ok');
        });
    });
});

// javítom majd: ha már egyszer like-olt valakit, azt ne írja be az adatbázisba újra
app.post('/api/likes', (req, res) => {
    const data = {
        source_username: req.body.source_username,
        target_username: req.body.target_username
    };
    const query1 = `INSERT INTO likes (source_username, target_username)
    VALUES (?,?);`
    const params1 = [data.source_username, data.target_username];

    pool.query(query1, params1, (err1) => {
        if (err1) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.status(500).send(err.sqlMessage);
            return;
        }
        const query2 = `SELECT * FROM likes WHERE source_username = ? AND target_username = ?`
        const params2 = [data.target_username, data.source_username]
        
        pool.query(query2, params2, (err2, rows) => {
            if (err2) {
                console.error(`Cannot retrieve data: ${err.toString()}`);
                res.status(500).send(err.sqlMessage);
                return;
            }
            if (rows.length > 0) {
                res.status(201).send({ message: "It is a match!" })
                return
            }
            res.status(201).send('ok')
        });
    });
});


app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));