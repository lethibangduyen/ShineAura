// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoute = require('./routes/signupRoute');
const userRoute = require('./routes/userRoute');
const signinRoute = require('./routes/signinRoute');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://duyen3004:Lethibangduyen3004@shine-aura-test-db.pf0rcx6.mongodb.net/';

mongoose.connect(mongoURI);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB Atlas connection established successfully');
});

app.post('/signup', signupRoute);
app.post('/signin', signinRoute);
app.get('/users', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
