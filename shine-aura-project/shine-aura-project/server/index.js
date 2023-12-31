const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const signupRoute = require('./routes/signupRoute');
const userRoute = require('./routes/userRoute');
const signinRoute = require('./routes/signinRoute');
const changepassRoute = require('./routes/changepassRoute');
const productRoute = require('./routes/productRoute');
const forgotRoute = require('./routes/forgotRoute');
const sendtokenRoute = require('./routes/sendtokenRoute');
const resetpassRoute = require('./routes/resetpassRoute');
const cartRoute = require('./routes/cartRoute');
const authenticateToken = require('./middleware/auth');
const Product = require('./models/Product');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://baou0508:Phamhoangbao0508@shine-aura-test-db.pf0rcx6.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoURI);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB Atlas connection established successfully');
});

app.get('/products', async (req, res) => {
  const searchTerm = req.query.term;
 
  try {
      let query = {};
      if (searchTerm) {
          query = { product_name: { $regex: new RegExp(searchTerm, 'i') } };
      }
 
      const products = await Product.find(query);
      res.json(products);
  } catch (error) {
      console.error(`Error: ${error}`);
      res.status(500).send('An error occurred while trying to fetch products.');
  }
});

app.get('/verification', (req, res) => {
  res.send('Verification route is working!');
});
app.post('/signup', signupRoute);
app.post('/signin', signinRoute);
app.get('/users', authenticateToken, userRoute);
app.put('/', authenticateToken, changepassRoute);
app.delete('/users', authenticateToken, userRoute);
app.use('/product', productRoute);
app.post('/forgot-password', forgotRoute);
app.use('/', sendtokenRoute);
app.use('/', resetpassRoute);
app.use('/cart', cartRoute);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
