const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// allows for .env file
require('dotenv').config();

// configure express server 
const app = express();
const port = process.env.port || 5000;
console.log(process.env.port)

app.use(cors());
app.use(express.json());

// MongoDB set up 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection is successful yessir')
})

// Using the files containing api routes
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// Set routes to custom apis
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


// start server 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});