var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {

    User.findOne({}, function(err,doc){
        if(err){
            return res.send("Error!");
        }
        if(!doc){
            res.render('node', {email: "Insert an email first"});
        } else {
            res.render('node', {email: doc.email});
        }
    })
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Utepils',
        lastName: 'SRL',
        password: 'utepils',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
