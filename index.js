const express = require('express');
const app = express();
const userInfo = require('./routes/user-info');

app.use(express.json());
app.use('/user-info', userInfo);

// home apge
app.get('/', (req, res) => {
    return res.status(200).send('Node.js Miscellaneous Scripts...');
});

app.get('/hello-world', (req, res) => {
    return res.status(200).send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server listening on port: 3000.');
});