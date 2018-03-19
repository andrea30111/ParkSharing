var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation');
var User = require('../models/user');
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
    var decoded = jwt.decode(req.query.token);
    Reservation.find({user: decoded.user._id})
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
        Parking.findById(req.body.parkingId, function(err, parking){
            if(err){
                return res.status(500).json({
                    title: 'an error occurred',
                    error: err
                });
            }

            //FIXME calculate amount correctly
            const amount = parking.hourly_price;

            var reservation = new Reservation({
                user: user,
                parking: parking,
                car: null,
                start_ts: req.body.start,
                end_ts: req.body.end,
                amount: amount,
                payment_type: 1
            });

            reservation.save(function(err,result){
                if(err){
                    return res.status(500).json({
                        title: 'an error occurred',
                        error: err
                    });
                }
                res.status(201).json({
                    message: 'saved booking',
                    obj: result
                });
            });
        });
    });
});

module.exports = router;
