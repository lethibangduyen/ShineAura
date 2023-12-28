// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoute = require('./routes/signupRoute');
const userRoute = require('./routes/userRoute');
const signinRoute = require('./routes/signinRoute');
const changepass = require('./routes/changepass');
const authenticateToken = require('./middleware/auth');

const Product = require('./models/Products');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://baou0508:Phamhoangbao0508@shine-aura-test-db.pf0rcx6.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB Atlas connection established successfully');
});


app.get('/products', (req, res) => {
  Product.find()
      .then(products => res.json(products))
      .catch(err => res.status(500).json('Error: ' + err));
});

app.post('/signup', signupRoute);
app.post('/signin', signinRoute);
app.get('/users', userRoute);
app.put('/users', authenticateToken, userRoute);
app.delete('/users', authenticateToken, userRoute);
app.put('/users', authenticateToken, changepass);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
