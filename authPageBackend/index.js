const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;
const User = require('./models/userModel');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Error creating user' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
