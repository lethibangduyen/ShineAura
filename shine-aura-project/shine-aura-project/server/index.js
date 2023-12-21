const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Database connected successfully'))
 .catch(err => console.log(err));

app.get('/', (req, res) => {
 res.send('Hello World!');
});

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});