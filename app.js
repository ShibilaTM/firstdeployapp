const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/db')
const app = express(); 
const PORT = process.env.PORT;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/build')));

// Middleware order correction
app.use(morgan('dev'));
app.use(cors());

// All routes should be included here
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

const userRoute = require('./routes/userRoutes');
app.use('/api/user', userRoute);

const formRoute = require('./routes/formRoutes');
app.use('/api/form', formRoute);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

