var express = require('express');
var router = express.Router();
var Parking = require('../models/parking');
var jwt = require('jsonwebtoken');

//check if user is authenticated
router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if(err){
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    })
});

router.get('/', function (req, res, next) {
    Parking.find({user: req.body.userId})
        .exec(function (err, parkings) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: parkings
            });
        });
});
    
router.post('/', function (req, res, next) {
    console.log('save park');
    /* save park
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
        });*/
    });

module.exports = router;