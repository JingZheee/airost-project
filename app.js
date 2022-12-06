const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const connection = require('./config/database');
const cookieParser = require('cookie-parser');

const app = express();


// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');




// routes
app.get('/', (req, res) => res.send('wassup'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);

app.listen(3000);