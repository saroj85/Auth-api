const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const port = 5000;
// import Routes
const authRoute = require('./routes/auth');

const postRoute = require('./routes/blogPost');
// const dotenv = require('dotenv').config();

// connect to database

mongoose.connect("mongodb+srv://Saroj85:Saroj@852131@contactkeeper-v7ban.mongodb.net/test?retryWrites=true&w=majority", 
     { useNewUrlParser: true },
    () => console.log("db Connected!!"));


app.use(express.json());

// route middleware

app.use('/api/user', authRoute);
app.use('/api/post', postRoute);
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 

  
app.listen(port, () => console.log(`server start on ${port}`))