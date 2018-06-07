const express = require('express');

const app = express();

app.get('/signup',()=>{
    res.send('signup');
})
app.listen('8000',()=>{
    console.log('server started');
})