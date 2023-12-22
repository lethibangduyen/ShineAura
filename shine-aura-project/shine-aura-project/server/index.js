const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shineaura')
app.post('/signup', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.listen(5173, () => { console.log('Server started') });