var express = require('express');
var router = express.Router();
var Parking = require('../models/parking');
var User = require('../models/user');
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
    var decoded = jwt.decode(req.query.token);
    Parking.find({user: decoded.user._id})
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
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user){
        if(err){
            return res.status(500).json({
                title: 'an error occurred',
                error: err
            });
        }

        var parking = new Parking({
            name : req.body.name,
            description : req.body.description,
            address : req.body.address,
            city : req.body.city,
            cap : req.body.cap,
            latitude : req.body.latitude,
            longitude : req.body.longitude,
            length : req.body.length,
            width : req.body.width,
            height : req.body.height,
            type : req.body.type,
            box_type : req.body.box_type,
            hourly_price : req.body.hourly_price,
            daily_price : req.body.daily_price,
            weekly_price : req.body.weekly_price,
            montly_price : req.body.montly_price,
            user : user
        });
        parking.save(function(err,result){
            if(err){
                return res.status(500).json({
                    title: 'an error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'saved parking',
                obj: result
            });
        });
    });
});

module.exports = router;