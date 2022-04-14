const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let input = Number(req.query.input);
    if (!input) {
        res.json({ "error": "Please provide an input!" });
    } else {
        res.json({
            "received": input,
            "result": input * 2
        });
    }
});
app.get('/greeter', (req, res) => {
    const name = req.query.name;
    const title = req.query.title;
    if (!name && !title) {
        res.status(400).send({ 'error': "Please provide a name and a title!" })
    }
    if (!name) {
        res.status(400).send({ 'error': "Please provide a name!" })
    }
    if (!title) {
        res.status(400).send({ 'error': "Please provide a title!" })
    }
    res.json({ welcome_message: 'Oh, hi there ' + name + ', my dear ' + title + '!' })
});

app.get('/appenda/:appendable', (req, res) => {
    const word = req.params.appendable;
    const appended = word.concat('a');
    if (!word) {
        res.status(404).send('Not found');
    }
    res.status(200).send({ appended: appended });
});

app.post('/dountil/:operations', (req, res) => {
    const operation = req.params.operations;
    const data = req.body;
    const answer = { result: doOperation(operation, Number(data)) }
    function doOperation(operation, until) {
        let result = 0;
        if (operation = 'sum') {
            for (let i = 1; i <= until; i++) {
                return result += i;
            }
        }
        if (operation = 'factor') {
            for (let i = 1; i <= until; i++) {
                return result *= i;
            }
        }
    }

    if (!data) {
        res.status(400).send({ error: "Please provide a number!" });
    }
    res.status(200).send(answer);


});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});