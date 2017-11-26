var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/*
router.get('/', function (req, res, next) {
    Message.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});
*/
router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fiscalCode: req.body.fiscalCode,
        password: bcrypt.hashSync(req.body.password,10),
        email: req.body.email
    });
    user.save(function(err,result){
        console.log("save" );
        if(err){
            return res.status(500).json({
                title: 'an error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'saved user',
            obj: result
        });
    });
    
    router.post('/signin', function(req, res, next) {
        User.findOne({email: req.body.email}, function(err, user) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!user) {
                return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
                });
            }
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
                });
            }
            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id
            });
        });    
    });    
});

module.exports = router;