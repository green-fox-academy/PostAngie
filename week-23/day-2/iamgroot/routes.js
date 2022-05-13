const express = require('express');
const app = express();
app.use(express.json());

app.get('/groot', (req, res) => {
    const message = req.query.message
        if (!message) {
            res.status(400).send({ 'error': 'I am Groot' });
            return;
        }
        res.send({
            'recieved': message, 
            'translated': 'I am Groot'});
});
  
    // TODO: implement this method

module.exports = app;