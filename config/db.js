// const mongoose = require('mongoose')

const MONGO_DB_URL = process.env.MONGO_DB_URL

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

const { MongoClient } = require('mongodb');

const client = new MongoClient(MONGO_DB_URL , { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  await client.connect();
  console.log('Connected to MongoDB');
}

connect();
