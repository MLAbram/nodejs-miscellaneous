const express = require('express');
const app = express();
const geoip = require('geoip-lite');

app.set('trust proxy', true);

app.get('/', (req, res) => {
    return res.status(200).send('User Info...');
});

app.get('/header', (req, res) => {
    res.header("Content-Type",'application/json');
    return res.status(200).json(req.headers);
});

app.get('/ip', (req, res) => {
    // const geo = geoip.lookup(req.ip);
    const geo = geoip.lookup('207.97.227.239');

    res.header("Content-Type",'application/json');
    return res.status(200).json(geo);
});

module.exports = app;