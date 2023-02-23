const express = require('express');
const app = express();
// const v1_contacts = require('./routes/v1_contacts');

app.use(express.json());
// app.use('/api/v1', v1_contacts);

// home page
app.get('/', (req, res) => {
  return res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000.');
});