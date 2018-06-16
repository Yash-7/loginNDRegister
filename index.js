const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); 
const path = require('path')
const MongoClient= require('mongodb').MongoClient;
const assert=require('assert');
const ejs = require('ejs');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

let home=require('./routes/home');
app.use('/',home)

app.listen('8000',()=>{
    console.log('server started');
})
