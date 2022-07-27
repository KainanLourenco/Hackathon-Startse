const express = require('express');
const app = express();

const index =  require('./routes/home');
const borrowerRoute = require('./routes/borrowerRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', index);
app.use('/borrower', borrowerRoute);

module.exports = app;