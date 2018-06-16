const express = require('express');
const router = express.Router();
const app= require('../index.js').users;

const db=require('../db')

db.read().then(function(items) {
    console.log('The promise was fulfilled with items!');
    return items;
}, function(err) {
    console.error('The promise was rejected', err, err.stack);
}).then(function(items){
    console.log('why' , items)
    router.get('/signup',(req,res)=>{
        res.render('signup');
    })
    router.get('/login',(req,res)=>{
        res.send(items)
    })
});

router.post('/signup',(req,res)=>{
    console.log(req.body.username)
    res.redirect('/login')
})

router.get('',(req,res)=>{
    res.redirect('/login')
})

// router.get('/home',isLoggedIn,(req,res)=>{
//     res.send('Home')
// })
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//         return next();
//     res.redirect('/login');
// }
module.exports = router;