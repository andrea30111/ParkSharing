var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

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
    //build new user entity
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fiscalCode: req.body.fiscalCode,
        password: bcrypt.hashSync(req.body.password,10),
        email: req.body.email
    });
    
    //send verification email
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'utepilssrl@gmail.com',
        pass: 'Utepils123'
      },
      tls: { rejectUnauthorized: false }
    });
    var mailOptions = {
      from: 'ParkSharing',
      to: req.body.email,
      subject: 'Verify your account',
      text: 'Verify your account clicking the following link'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    //store user in DB
    user.save(function(err,result){
        if(err){
            if(err.message.indexOf('unique') > -1){
                return res.status(500).json({
                    title: 'The email is already registered, please provide a different one',
                    error: err
                });
            }
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Registration successful',
            obj: result
        });
    });    
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        //handle generic error
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        //handle user not found
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        //handle wrong password
        if (!bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
                });
        }
        //login successful, create token
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            userName: user.firstName
        });
    });    
});

module.exports = router;