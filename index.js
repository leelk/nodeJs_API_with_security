const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes
const authRoute = require('./routes/auth');
dotenv.config();

//Connect to DB 
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true },
    ()=> console.log('Connected to DB')
);


//Middleware
app.use(express.json());




//Route Middlewares

app.use('/api/user',authRoute);


app.listen(4000,()=> console.log('Sever up and runing'));