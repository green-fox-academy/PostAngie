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

app.get('/playlists', (req, res) => {
    const query = `SELECT * FROM playlists ORDER BY id`

    pool.query(query, (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.status(500).send(err.sqlMessage);
            return;
        }
        res.send(rows);
    });
});

app.post('/playlists', (req, res) => {
    const data = { title: req.body.title };

    if (!data.title) {
        res.status(400).send({ message: 'missing title' });
        return;
    }

    const query = `INSERT INTO playlists (title)
    VALUES (?);`
    const params = [data.title];

    pool.query(query, params, (err, result) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.status(500).send(err.sqlMessage);
            return;
        }
        res.status(201).send('Done');
    });
});

app.delete('/playlists/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
        res.status(400).send({ message: 'Invalid or missing ID' })
    }

    const selectQuery = `SELECT * FROM playlists WHERE id = ?`;
    const params = [id];

    pool.query(selectQuery, params, (selectErr, rows) => {
        if (selectErr) {
            console.error(selectErr);
            res.status(500).send({ message: 'DB error' });
            return;
        }

        if (rows.length === 0) {
            res.status(404).send({ message: 'Not found' });
            return;
        }

        const systemRank = rows[0].system_rank;

        if (systemRank === 1) {
            res.status(401).send({ message: 'Unauthorized' });
            return;
        }

        const deleteQuery = `DELETE FROM playlists WHERE id = ?`;
        pool.query(deleteQuery, params, (deleteErr) => {
            if (deleteErr) {
                console.error(deleteErr);
                res.status(500).send({ message: 'DB error' });
                return;
            }
            res.status(204).send();
        });
    });
});

app.get('/playlist-tracks/:playlist_id', (req, res) => {
    const params = [req.params.playlist_id];
    const query = `SELECT id, title, artist, duration, path FROM tracks WHERE playlist_id=?`;

    pool.query(query, params, (err, rows) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return;
        }
        res.send(rows);
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

    pool.query(query, params, (err, result) => {  // result: object-et ad vissza
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.status(500).send(err.sqlMessage);
            return;
        }
        res.status(201).send({
            id: result.insertId,
            score: 0,
            ...data
        });
    });
});

app.post('/playlist-tracks/:playlist_id', (req, res) => {
    const data = {
        playlist_id: req.params.playlist_id,
        track_id: req.body.track_id
    }

    if (!data.playlist_id) {
        res.status(400).send({ message: 'missing playlist ID' });
        return;
    }

    if (!data.track_id) {
        res.status(400).send({ message: 'missing track ID' });
        return;
    }
    const params = [data.playlist_id, data.track_id];
    const selectQuery = `SELECT * from tracks_playlists WHERE playlist_id=? AND track_id=?`

    pool.query(selectQuery, params, (selectErr, rows) => {
        if (selectErr) {
            console.error(`Cannot retrieve data: ${selectErr.toString()}`);
            res.status(500).send(selectErr.sqlMessage);
            return;
        }
        if (rows.length > 0) {
            res.status(400).send({ message: 'Track is already on the playlist'});
            return
        }
        const insertQuery = `INSERT INTO tracks_playlists (playlist_id, track_id)
            VALUES (?,?);`;
            pool.query(insertQuery, params, (insertErr, result) => {
                if (insertErr) {
                    console.error(`Cannot retrieve data: ${insertErr.toString()}`);
                    res.status(500).send(insertErr.sqlMessage);
                    return;
                }
                res.status(201).send('Done');
        });
    });
});

app.delete('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
    const data = {
        playlist_id: req.params.playlist_id,
        track_id: req.params.track_id
    }

    if (!data.playlist_id || !data.track_id) {
        res.status(400).send({ message: 'Missing data!' })
    }

    const params = [data.playlist_id, data.track_id];
    const query = `DELETE from tracks_playlists WHERE playlist_id=? AND track_id=?`;

    pool.query(query, params, (err, result) => {
        if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return;
        }
        res.status(204).send();
    });
});


app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));