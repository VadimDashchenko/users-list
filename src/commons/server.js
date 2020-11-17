const express = require('express');
const app = express();
const port = 4224;
const users = require('./users.json');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/users', (req, res) => {
    res.status(200).send(users);
});

app.listen(port);