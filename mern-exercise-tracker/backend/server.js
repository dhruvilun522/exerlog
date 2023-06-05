const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5500;
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dhruvilun522:UJcXf6QljlodwN3n@cluster0.hipx2uy.mongodb.net/?retryWrites=true&w=majority');
const connection = mongoose.connection;
connection.once('open' , () => {console.log('sucess')});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port , () => {console.log(port)})
