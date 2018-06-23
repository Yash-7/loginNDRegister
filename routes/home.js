const express = require('express');
const router = express.Router();
const axios = require('axios');
const request=require('request');
const app= require('../index.js').users;

const db=require('../db')

router.get('/signup',(req,res)=>{
    res.render('signup')
})
router.get('/users',(req,res)=>{
    db.read().then(function(items){
        res.render('users',{
            data:items
        });
    })
})
router.post('/signup',(req,res)=>{
    db.insert(req.body.username,req.body.password)
    res.redirect('/users')
})
router.get('/login',(req,res)=>{
    res.send('login page')
})
router.get('/delete/:id',(req,res)=>{
    db.delete(req.params.id);
    res.redirect('/users');
})
router.get('/users/:id',(req,res)=>{
    db.findById(req.params.id).then(user=>{
        res.render('eachUser',{
            data:user
        });
    }).catch(err=>{
        console.log(err);
    })   
})
router.post('/edit',(req,res)=>{
    db.update(req.body.id,req.body.username,req.body.password).then(()=>{
        res.redirect('/users');
    })
})
var apiPromise = new Promise((resolve, reject)=>{
    request('http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        resolve(body);
        // console.log(response)
    })
})
apiPromise.then(function(value){
    router.get('/api',(req,res)=>{
        res.send(value);
    })
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