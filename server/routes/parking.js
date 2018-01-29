var express = require('express');
var router = express.Router();
var Parking = require('../models/parking');
var jwt = require('jsonwebtoken');
/*TODO pass in token as parameter and decomment here

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
});*/

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
    // save park
    var parking = new Parking({
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
        userId : req.body.userId
    });
    
    parking.save(function(err,result){
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
});

module.exports = router;