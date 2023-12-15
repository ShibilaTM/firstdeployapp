const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/db')
const app = express(); 
const PORT = process.env.PORT;
const path = require('path');
const { connect, client } = require('./config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Middleware order correction
app.use(morgan('dev'));
app.use(cors());


app.use(express.static(path.join(__dirname, '/build')));
const userRoute = require('./routes/userRoutes');
app.use('/user', userRoute);

const formRoute = require('./routes/formRoutes');
app.use('/form', formRoute);

app.get("/items/:my_item", async (req, res) => {
  let my_item = req.params.my_item;
  let item = await client.db("EmployeeDB")
              .collection("employeedatas")
              .findOne({ my_item: my_item });

  return res.json(item);
});


// All routes should be included here
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});


connect().then(() => {
// Start the Express app after successful MongoDB connection
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
});
