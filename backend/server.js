require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const icecreamRoutes = require('./routes/icecreams');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/icecreams', icecreamRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Ice Cream API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
