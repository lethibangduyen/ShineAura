// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://baou0508:Phamhoangbao0508@shine-aura-test-db.pf0rcx6.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB Atlas connection established successfully');
});

app.use('/signup', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
