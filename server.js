const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");


const bodyParser = require('body-parser');
const port = 5000;
// import Routes
const authRoute = require('./routes/auth');

const postRoute = require('./routes/blogPost');
// const dotenv = require('dotenv').config();
// "mongodb+srv://Saroj85:Saroj@852131@contactkeeper-v7ban.mongodb.net/test?retryWrites=true&w=majority"
// connect to database
var url = "mongodb+srv://Saroj85:Saroj@852131@contactkeeper-v7ban.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(url, 
     { useNewUrlParser: true },
    () => console.log("db Connected!!"));
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

app.use(cors());
app.use(express.json());

// route middleware

app.use('/api/user', authRoute);
app.use('/api/post', postRoute);
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  })); 




app.listen(port, () => console.log(`server start on ${port}`))