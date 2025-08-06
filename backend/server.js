const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/cartdb');

app.use('/api/cart', cartRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
