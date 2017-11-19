var express = require('express');
var router = express.Router();
var User = require('../models/user');

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
        password: req.body.password,
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
            message: 'saved message',
            obj: result
        });
    });
    
});

module.exports = router;