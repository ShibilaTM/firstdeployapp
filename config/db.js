// const mongoose = require('mongoose')



// mongoose.connect(MONGO_DB_URL,{
//     dbName:'EmployeeDB',
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// })

// .then(()=>{
//     console.log('MongoDB connection success')
// })
// .catch(error=>{
//     console.log('MongoDB coneection is not available'+error)
// })



// --------------------------------------------------------------------
// const MONGO_DB_URL = process.env.MONGO_DB_URL
// const { MongoClient } = require('mongodb');

// // Replace the connection string and options with your actual MongoDB connection details
// const uri = MONGO_DB_URL

// // New options: useNewUrlParser and useUnifiedTopology are no longer needed

// const client = new MongoClient(uri, {
//     serverSelectionTimeoutMS: 5000, // Increase the timeout value (in milliseconds)
//     socketTimeoutMS: 45000, // Increase the socket timeout value
//   });

// async function connect() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// connect();

// -----------------------------------------------------------------------------

const { MongoClient } = require('mongodb');

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const uri = MONGO_DB_URL;

const client = new MongoClient(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connect, client };
